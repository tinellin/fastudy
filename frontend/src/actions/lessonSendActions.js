import {
  updateCounter,
  closeModal,
  renderModal,
  throwError,
} from '@/modalActions';
import { createFile } from '../templates/Preview';

import api from '../services/api.js';
import { limitChar } from '@/mainActions';

import {
  MODAL_LESSON_MENU,
  MODAL_LESSON_SEND,
  MODAL_CONFIRMATION,
  MODAL_THANKED,
  FORM_HEADER,
} from '../pages/Main/Modal/allModalTypes';

export const changeSubject = (e) => {
  return { type: 'SUBJECT_CHANGED', payload: e.target.value };
};

export const changeTheme = (e) => {
  return { type: 'THEME_CHANGED', payload: e.target.value };
};

export const changeDifficulty = (e) => {
  return { type: 'DIFFICULTY_CHANGED', payload: e.target.value };
};

export const verifyType = (subject, theme, difficulty, counter) => {
  return (dispatch) => {
    if (theme !== '' && difficulty !== '' && subject > 0) {
      let type = { subject, theme, difficulty };
      localStorage.setItem('type', JSON.stringify(type));
      localStorage.setItem('exercises', JSON.stringify(['']));
      dispatch(renderModal(MODAL_LESSON_SEND, '', counter, false));
    } else {
      dispatch(throwError('Preencha todos os campos!', 'warn'));
    }
  };
};

export const changeTitle = (e) => {
  return (dispatch) => {
    const text = limitChar(e.target.value, 50);
    dispatch({ type: 'TITLE_CHANGED', payload: text });
  };
};

export const changeQuestion = (e) => {
  return (dispatch) => {
    const text = limitChar(e.target.value, 1000);
    dispatch({ type: 'QUESTION_CHANGED', payload: text });
  };
};

export const changeImage = (e, files, counter) => {
  const img = e.target.files[0];
  const file = createFile(img);
  files[counter] = file;
  return { type: 'IMAGE_CHANGED', payload: files };
};

export const changeOpcionalQuestion = (e) => {
  return (dispatch) => {
    dispatch({ type: 'OPCIONAL_QUESTION_CHANGED', payload: e.target.value });
  };
};

export const changeCorrect = (letter) => {
  return (dispatch) => {
    dispatch({ type: 'CORRECT_CHANGED', payload: letter });
  };
};

export const changeAnswers = (e, letter, answers) => {
  //Mapeia o estado em todos os componentes de respostas dinamicamente.
  answers.map((answer) => {
    if (answer.letter === letter) return (answer.value = e.target.value);
  });

  return (dispatch) => {
    dispatch({ type: 'ANSWERS_CHANGED', payload: answers });
  };
};

export const createAnswers = (render, count, fields) => {
  const letters = ['A', 'B', 'C', 'D', 'E'];
  count++;

  if (render === 'Y') {
    //Limpar as respostas e criar novas.
    fields.answers.length = 0;
    letters.map((letter, i) => {
      if (i <= 1) {
        fields.answers.push({ letter: letter, value: '' });
      }
    });
  }

  if (fields.answers.length < 5 && count > 1) {
    fields.answers.push({ letter: letters[count], value: '' });
  }

  return { type: 'ANSWER_CREATED', payload: fields.answers, count };
};

export const removeAnswer = (count) => {
  count--;
  return { type: 'ANSWER_REMOVED', count };
};

//Limpar todos os campos.
export const clearFields = () => {
  return { type: 'FIELDS_VERIFIED_SUCCESS' };
};

export const verifyAnswers = (exercise, counter, exercises, submit, type) => {
  let error;

  exercise.fields.answers.map((answer) => {
    if (answer.value === '') return (error = true);
  });

  return (dispatch) => {
    if (error) {
      dispatch(throwError('Preencha todos os campos corretamente!', 'warn'));
    } else {
      dispatch(verifyFields(exercise, counter, exercises, submit, type));
    }
  };
};

export const verifyFields = (
  { count, fields, files },
  counter,
  exercises,
  submit,
  type
) => {
  return (dispatch) => {
    if (
      fields.title === '' ||
      fields.question === '' ||
      fields.correct === ''
    ) {
      dispatch(throwError('Preencha todos os campos corretamente!', 'warn'));
    }

    dispatch(saveData(fields, exercises, counter));

    if (submit) {
      dispatch(sendExercises(counter, type));
    } else {
      counter++;
      dispatch(updateCounter(counter));

      if (counter === exercises.length) {
        if (!submit) {
          //Criar "esboço" vazio para o próx. exercício.
          dispatch({ type: 'SKETCH_CREATED', exercises, counter });
          dispatch(clearFields());
          dispatch(createAnswers('Y', (count = 0), fields));
        }
      } else {
        dispatch(setcount(exercises, counter));
        //Retornar valores ao clicar na seta direita.
        const values = exercises[counter];
        const img = files[counter];
        dispatch({ type: 'VALUES_ADVANCED', payload: values, img });
      }
    }
  };
};

//Pegar a quantidade de respostas no momento.
export const setcount = (exercises, counter) => {
  let letter = exercises[counter].answers.length;
  return { type: 'COUNT_LETTER_SETTED', payload: letter - 1 };
};

//Salvar valores dos exercícios no localStorage.
export const saveData = (fields, exercises, counter) => {
  return (dispatch) => {
    dispatch(verifyLocalStorage());
    exercises[counter] = fields;
    localStorage.setItem('exercises', JSON.stringify(exercises));
    dispatch({ type: 'DATA_SAVED' });
  };
};

export const returnValues = ({ fields, files }, counter, exercises) => {
  return (dispatch) => {
    dispatch(saveData(fields, exercises, counter));
    counter--;
    dispatch(updateCounter(counter));

    if (counter === -1) {
      dispatch(renderModal(MODAL_LESSON_MENU, '', counter));
    } else {
      let values = exercises[counter];
      dispatch(setcount(exercises, counter));

      //Retornar valores ao clicar na seta esquerda.
      dispatch({
        type: 'VALUES_RETURNED',
        payload: values,
        img: files[counter],
      });
    }
  };
};

//Verifica se as chaves existem no localStorage.
export const verifyLocalStorage = () => {
  return (dispatch) => {
    if (
      localStorage.getItem('exercises') === null ||
      localStorage.getItem('type') === null ||
      localStorage['exercises'] === '' ||
      localStorage['type'] === ''
    ) {
      dispatch(closeModal());
    }
  };
};

//Verifica se os exercíos estão corretos e abre modal de confirmação.
export const sendExercises = (counter, type) => {
  let exercises = JSON.parse(localStorage.getItem('exercises'));

  return (dispatch) => {
    dispatch(verifyLocalStorage());
    if (exercises.length < 5) {
      dispatch(
        throwError('A atividade deve conter no mínimo 5 exercícios!', 'error')
      );
    } else {
      dispatch(renderModal(MODAL_CONFIRMATION, type, counter));
    }
  };
};

//Envia a lição ao banco de dados.
export const confirmedSendExercises = (files, id) => {
  return (dispatch) => {
    let exercises = JSON.parse(localStorage.getItem('exercises'));
    let type = JSON.parse(localStorage.getItem('type'));
    const data = new FormData();

    files.map((item) => {
      data.append('imgs', item.file, item.file.name);
    });

    let lesson = { type, exercises, id };
    //Realiza a conversão p/ string, p/ enviar como Form-Data, criando um blob.
    const json = JSON.stringify(lesson);
    const blob = new Blob([json], { type: 'application/json' });
    data.append('tmp', blob);

    api.post('/lesson/create', data, { FORM_HEADER }).then(() => {
      dispatch(renderModal(MODAL_THANKED));
    });
  };
};
