import api from '../services/api.js';
import { renderModal, updateCounter, throwError } from '@/modalActions';
import { definePages, defineCurrentPage, sendPagination } from '@/mainActions';

import {
  MODAL_LESSON_TEMPLATE,
  MODAL_LESSON_DO,
} from '../pages/Main/Modal/allModalTypes';

export const getAllLessons = (id, subjectId, page, search, j, k) => {
  return (dispatch) => {
    const qty = sendPagination();
    if (page !== 0) {
      api
        .post('/lesson/getAll', { userId: id, subjectId, page, qty, search })
        .then((res) => {
          const { lessons, pages } = res.data;
          if (page <= pages) {
            const data = { id, subjectId };
            dispatch(defineCurrentPage(page));
            dispatch(definePages(page, pages, 'LESSON', data, j, k, search));
            dispatch({ type: 'LESSONS_GOTTEN', payload: lessons });
          }
        });
    }
  };
};

export const openLesson = (id, allLessons, counter, template) => {
  return (dispatch) => {
    const lesson = allLessons.find((lesson) => lesson.id === id);
    dispatch({
      type: 'LESSON_OPENED',
      payload: lesson.exercise,
      key: id,
    });
    dispatch(arrowLesson(lesson.exercise, 'A', counter, template));
  };
};

export const arrowLesson = (lesson, arrow, counter, template) => {
  return (dispatch) => {
    if (!template[counter] && template[counter] !== undefined) {
      dispatch(throwError('Selecione uma alternativa!', 'warn'));
    } else {
      let qty = arrow === 'A' ? counter + 1 : counter - 1;
      dispatch(updateCounter(qty));
      if (!template[qty]) template[qty] = '';
      dispatch({
        type: 'LESSON_ADVANCED',
        payload: lesson[qty],
        correct: template,
      });
    }
  };
};

export const changeCorrect = (letter, counter, template) => {
  template[counter] = letter;
  return { type: 'CORRECT_CHANGED', payload: template };
};

export const correctLesson = (
  allLessons,
  lesson,
  template,
  counter,
  view,
  key,
  id
) => {
  let questionsColor = [];
  let statistic = { correct: 0, wrong: 0, user: id };
  const data = { answers: template, userId: id, lesson: key };

  //Remover lição quando estiver feita em tempo de execução (do estado).
  const lessonFiltered = allLessons.filter((lesson) => lesson.id !== key);

  lesson.map((exercise, i) => {
    if (exercise.correct === template[i]) {
      questionsColor.push({
        backgroundColor: 'rgba(92, 183, 92, 0.5)',
      });
      if (!view) statistic.correct++;
    } else {
      questionsColor.push({
        backgroundColor: 'rgba(216, 84, 79, 0.5)',
      });
      if (!view) statistic.wrong++;
    }
  });

  return (dispatch) => {
    dispatch({
      type: 'LESSON_CORRECTED',
      payload: questionsColor,
      lesson: lessonFiltered,
    });
    if (!view) {
      dispatch(renderModal(MODAL_LESSON_TEMPLATE, counter));
      api.post('feedback/create', data).then((resp) => {
        return resp;
      });
      api.post('statistic/save', statistic).then((resp) => {
        return resp;
      });
    }
  };
};

export const viewResult = (lesson, counter) => {
  return (dispatch) => {
    counter = 0;
    dispatch(renderModal(MODAL_LESSON_DO, counter));
    dispatch({ type: 'RESULT_VIEWED', payload: lesson[counter], view: true });
  };
};

export const clearLesson = () => {
  return (dispatch) => {
    dispatch({ type: 'LESSON_CLEANED' });
  };
};

export const getFeedback = (id, subjectId, page, search, j, k) => {
  return (dispatch) => {
    const qty = sendPagination();
    api
      .post('feedback/getAll', { userId: id, subjectId, page, qty, search })
      .then((res) => {
        const { pages, feedbacks } = res.data;
        if (page <= pages) {
          let lesson = [];
          let answers = [];

          feedbacks.map((item) => {
            lesson.push(item.lesson);
            answers.push(item.answers);
          });

          const data = { id, subjectId };
          dispatch(defineCurrentPage(page));
          dispatch(definePages(page, pages, 'FEEDBACK', data, j, k));
          dispatch({ type: 'FEEDBACK_GOTTEN', lesson, answers });
        }
      });
  };
};

export const getFeedbackById = (
  allTemplate,
  i,
  allLessons,
  lesson,
  qtxEx,
  view
) => {
  const answers = allTemplate[i];
  return (dispatch) => {
    dispatch({ type: 'FEEDBACK_BY_ID_GOTTEN', payload: answers });
    dispatch(correctLesson(allLessons, lesson, answers, qtxEx, view));
  };
};

export const clearFeedback = () => {
  return (dispatch) => {
    dispatch({ type: 'FEEDBACK_CLEANED' });
  };
};
