import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Content, TemplateContent } from './styles';
import Button from '../../../../../templates/Button';

import { changeCorrect, correctLesson } from '@/lessonDoActions';
import { renderModal } from '@/modalActions';
import { MODAL_LESSON_TEMPLATE } from '../../allModalTypes';

export function LessonDo() {
  const dispatch = useDispatch();
  const {
    allLessons,
    exercise,
    correct,
    template,
    lesson,
    view,
    questionsColor,
    key,
  } = useSelector((state) => state.lessonDo);

  const { data } = useSelector((state) => state.auth);
  const { counter } = useSelector((state) => state.modal);
  let rightS;
  let display;
  let h5;

  if (view) {
    rightS = { backgroundColor: 'rgba(92, 183, 92, 0.5)' };
    display = { display: 'none' };
    h5 = { marginRight: '-1.5%' };
  }

  const Answers = (props) => {
    return (
      <div
        className="question"
        style={
          template[counter] === props.letter ? questionsColor[counter] : {}
        }
      >
        <div
          id="help-div"
          style={props.correctAnswer === props.letter ? rightS : {}}
        >
          <h5 style={h5}>{props.letter}</h5>
          <label className="radio-container">
            <span>{props.value}</span>
            <div style={display}>
              <input
                type="radio"
                value="10"
                name="answer"
                checked={
                  props.correct === props.letter ||
                  props.template[counter] === props.letter
                }
                onClick={() => {
                  if (!view) {
                    dispatch(changeCorrect(props.letter, counter, template));
                  }
                }}
              />
              <span className="checkmark"></span>
            </div>
          </label>
        </div>
      </div>
    );
  };

  let question = exercise.question.match(/[^\r\n]+/g);
  let opQuestion = exercise.opcionalQuestion.match(/[^\r\n]+/g);

  return (
    <Content>
      <h3>{exercise.title}</h3>
      {question ? question.map((item) => <p>{item}</p>) : exercise.question}
      {exercise.img ? <img src={exercise.img.path} /> : ''}
      {opQuestion
        ? opQuestion.map((item) => <p>{item}</p>)
        : exercise.opcionalQuestion}
      <div id="answers">
        {exercise.answers.map((answer) => (
          <Answers
            color={rightS}
            letter={answer.letter}
            value={answer.value}
            correctAnswer={exercise.correct}
            correct={correct}
            template={template}
          />
        ))}
      </div>
      {counter + 1 === lesson.length ? (
        <Button
          width="250"
          height="60"
          marginTop="4"
          onClick={() => {
            if (!view) {
              dispatch(
                correctLesson(
                  allLessons,
                  lesson,
                  template,
                  counter,
                  view,
                  key,
                  data.id
                )
              );
            } else {
              dispatch(renderModal(MODAL_LESSON_TEMPLATE, counter));
            }
          }}
          name={view ? 'Gabarito' : 'Corrigir'}
        />
      ) : (
        ''
      )}
    </Content>
  );
}

export function Template() {
  const { lesson } = useSelector((state) => state.lessonDo);

  return (
    <TemplateContent>
      <table>
        <thead>
          <tr>
            <th>Questão</th>
            <th>Respostas</th>
          </tr>
        </thead>
        <tbody>
          {lesson.map((exercise, i) => {
            if (i % 2 === 0) {
              return (
                <tr id="first-color">
                  <td>{i + 1}</td>
                  <td>{exercise.correct}</td>
                </tr>
              );
            } else {
              return (
                <tr id="second-color">
                  <td>{i + 1}</td>
                  <td>{exercise.correct}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </TemplateContent>
  );
}
