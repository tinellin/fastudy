import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaBook, FaPencilAlt, FaUserEdit } from 'react-icons/fa';

import { Title, LessonContainer, LessonCard, Footer } from './styles';
import { Pagination } from '../Pagination';
import { openModal, renderModal } from '@/modalActions';
import { openLesson, getFeedbackById } from '@/lessonDoActions';
import { MODAL_LESSON, MODAL_LESSON_DO } from '../Modal/allModalTypes';

export default function LessonList({ title }) {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state.modal);

  const { allLessons, allTemplate, template, view } = useSelector(
    (state) => state.lessonDo
  );
  let color;
  let text;

  return (
    <>
      <Title>{title}</Title>
      <LessonContainer>
        {allLessons.map((lesson, i) => {
          if (lesson.difficulty === 'hard') {
            text = 'Díficil';
            color = '#d9534f';
          }
          if (lesson.difficulty === 'medium') {
            text = 'Médio';
            color = '#f0ad4e';
          }
          if (lesson.difficulty === 'easy') {
            text = 'Fácil';
            color = '#5cb85c';
          }

          return (
            <LessonCard key={lesson.id}>
              <div id="difficulty-bar" style={{ backgroundColor: color }}>
                <h2>{text}</h2>
              </div>
              <section className="card-content">
                <div className="card-icon">
                  <FaBook />
                  <h3>{lesson.theme}</h3>
                </div>
                <div className="card-icon">
                  <FaPencilAlt />
                  <h3>{lesson.exercise.length} exercícios</h3>
                </div>
                <div className="card-icon">
                  <FaUserEdit />
                  <h3>{lesson.user.username}</h3>
                </div>
              </section>
              <button
                onClick={() => {
                  dispatch(openModal(MODAL_LESSON));
                  dispatch(renderModal(MODAL_LESSON_DO, counter));
                  dispatch(
                    openLesson(lesson.id, allLessons, counter - 1, template)
                  );
                  if (view) {
                    dispatch(
                      getFeedbackById(
                        allTemplate,
                        i,
                        allLessons,
                        lesson.exercise,
                        counter,
                        view
                      )
                    );
                  }
                }}
              >
                Fazer
              </button>
            </LessonCard>
          );
        })}
      </LessonContainer>
      <Pagination />
    </>
  );
}
