import React from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';

import { Content, AnswerContent, Menu } from './styles';

import TextArea from '../../../../../templates/TextArea';
import Field from '../../../../../templates/Field';
import Button from '../../../../../templates/Button';
import Preview from '../../../../../templates/Preview';
import MiniButtom from '../../../../../templates/MiniButton';
import Subjects from '../../../../../templates/Subjects';

import {
  changeSubject,
  changeTheme,
  changeDifficulty,
  changeTitle,
  changeQuestion,
  changeImage,
  changeOpcionalQuestion,
  changeAnswers,
  changeCorrect,
  createAnswers,
  removeAnswer,
  verifyAnswers,
} from '@/lessonSendActions';

export function LessonMenu() {
  const dispatch = useDispatch();
  const { theme, difficulty, subject } = useSelector(
    (state) => state.lessonSend
  );

  return (
    <Menu>
      <div className="content-menu">
        <label>Matéria</label>
        <Subjects
          onChange={(e) => dispatch(changeSubject(e))}
          value={subject}
        />
        <label>Tema</label>
        <Field
          type="text"
          icon="title"
          top="26"
          width="320"
          height="50"
          value={theme}
          placeholder="Digite o tema da atividade..."
          onChange={(e) => dispatch(changeTheme(e))}
        />
        <label>Dificuldade</label>
        <select
          id="difficulty"
          onChange={(e) => dispatch(changeDifficulty(e))}
          value={difficulty}
        >
          <option value="">Selecione...</option>
          <option value="easy">Fácil</option>
          <option value="medium">Médio</option>
          <option value="hard">Díficil</option>
        </select>
      </div>
    </Menu>
  );
}

export function Answer(props) {
  const dispatch = useDispatch();
  const { answers } = useSelector((state) => state.lessonSend.fields);

  return (
    <AnswerContent>
      <div className="question">
        <h5>{props.letter}</h5>
        <label className="radio-container">
          <input
            type="radio"
            value={props.correct}
            checked={props.correct === props.letter}
            name="correct"
            onClick={() => dispatch(changeCorrect(props.letter))}
          />
          <span className="checkmark" />
        </label>
        <TextArea
          placeholder={`Digite a resposta da questão ${props.letter} aqui...`}
          value={props.value}
          onChange={(e) => dispatch(changeAnswers(e, props.letter, answers))}
          height="25"
          borderRadius="1"
          border={{ borderBottom: '3px solid #007bff' }}
        />
      </div>
    </AnswerContent>
  );
}

export function LessonSend() {
  const dispatch = useDispatch();
  const { counter, modalType } = useSelector((state) => state.modal);
  const { count, fields, files } = useSelector((state) => state.lessonSend);
  const exercise = useSelector((state) => state.lessonSend);
  const { answers } = useSelector((state) => state.lessonSend.fields);

  let img = files[counter];

  let exercises = JSON.parse(localStorage.getItem('exercises'));

  let sAdd = count === 4 ? { display: 'none' } : { display: 'flex' };
  let sRemove = count === 1 ? { display: 'none' } : { display: 'flex' };
  let visibility;

  if (counter + 1 !== exercises.length) visibility = { display: 'none' };
  const responsive = window.innerWidth;

  return (
    <Content>
      <form onSubmit={(e) => e.preventDefault()}>
        <div id="title">
          <Field
            icon="title"
            type="text"
            placeholder="Título do exercício"
            width={responsive <= 375 ? '320' : '300'}
            height="50"
            marginTop="1"
            top="30"
            value={fields.title}
            onChange={(e) => dispatch(changeTitle(e))}
          />
        </div>
        <TextArea
          placeholder="Digite a pergunta aqui..."
          value={fields.question}
          onChange={(e) => dispatch(changeQuestion(e))}
          marginTop="5"
          marginBottom="3"
          padding="10"
          height="180"
          borderRadius="4"
          border={{ borderLeft: '4px solid #007bff' }}
        />
        <Preview
          name="Se quiser, clique aqui para selecionar uma imagem"
          onChange={(e) => dispatch(changeImage(e, files, counter))}
          preview={img ? img.preview : null}
        />
        <TextArea
          placeholder="Continue a pergunta opcional aqui..."
          value={fields.opcionalQuestion}
          onChange={(e) => dispatch(changeOpcionalQuestion(e))}
          marginTop="6"
          marginBottom="3"
          padding="10"
          height="100"
          borderRadius="4"
          border={{ borderLeft: '4px solid #007bff' }}
        />
        <p id="p-answers">Respostas</p>
        {answers.map((answer, i) => (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Answer
              key={i}
              correct={fields.correct}
              value={answer.value}
              letter={answer.letter}
            />
          </motion.div>
        ))}
        <MiniButtom
          //Botão criar perguntas.
          add={() => dispatch(createAnswers('N', count, fields))}
          sAdd={sAdd}
          //Botão remover perguntas.
          sRemove={sRemove}
          remove={() => dispatch(removeAnswer(count))}
          marginRight="8"
        />
        <Button
          width="250"
          height="55"
          marginTop="4"
          style={visibility}
          name="Enviar"
          onClick={() =>
            dispatch(
              verifyAnswers(exercise, counter, exercises, true, modalType)
            )
          }
        />
      </form>
    </Content>
  );
}
