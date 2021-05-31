import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { LessonModalContainer, LessonContent } from './styles';
import { Opacity, ModalContainer, Close } from '../allModalStyles';

import { verifyType, returnValues, verifyAnswers } from '@/lessonSendActions';

import {
  arrowLesson,
  viewResult,
  clearLesson,
  clearFeedback,
} from '@/lessonDoActions';

import { closeModal } from '@/modalActions';

import {
  MODAL_LESSON_SEND,
  MODAL_LESSON_DO,
  MODAL_LESSON_TEMPLATE,
  MODAL_CONFIRMATION,
  MODAL_THANKED,
} from '../allModalTypes';

export default function LessonModal() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const lessonSend = useSelector((state) => state.lessonSend);
  const { lesson, template, view } = useSelector((state) => state.lessonDo);

  let exercises = JSON.parse(localStorage.getItem('exercises'));
  let visibilityLeft;
  let visibilityRight;
  let visibilityClose;

  if (
    (modal.counter >= 0 && modal.modalType === MODAL_LESSON_SEND) ||
    (modal.counter > 0 && modal.modalType === MODAL_LESSON_DO) ||
    modal.modalType === MODAL_LESSON_TEMPLATE
  ) {
    visibilityLeft = { visiblity: 'visible' };
  } else {
    visibilityLeft = { visibility: 'hidden' };
  }

  if (
    (modal.counter + 1 === lesson.length &&
      modal.modalType === MODAL_LESSON_DO) ||
    modal.modalType === MODAL_CONFIRMATION ||
    modal.modalType === MODAL_THANKED ||
    modal.modalType === MODAL_LESSON_TEMPLATE
  ) {
    visibilityRight = { visibility: 'hidden' };
  }

  if (
    modal.modalType === MODAL_CONFIRMATION ||
    modal.modalType === MODAL_THANKED
  )
    visibilityClose = { visibility: 'hidden' };

  return (
    <LessonModalContainer>
      <ModalContainer maxW={modal.maxW} maxH={modal.maxH} minW={modal.minW}>
        <ToastContainer>{modal.error}</ToastContainer>
        <div id="close">
          <Close
            onClick={() => {
              if (
                modal.modalType === MODAL_LESSON_TEMPLATE ||
                modal.modalType === MODAL_LESSON_DO
              ) {
                view ? dispatch(clearFeedback()) : dispatch(clearLesson());
                dispatch(closeModal());
              } else {
                dispatch(closeModal());
              }
            }}
            style={visibilityClose}
          >
            <MdClose />
          </Close>
        </div>
        <h1 style={visibilityClose}>
          {modal.modalType === MODAL_LESSON_TEMPLATE
            ? 'Gabarito'
            : modal.modalType === MODAL_LESSON_DO
            ? `${modal.counter + 1}/${lesson.length}`
            : modal.counter === -1
            ? 'Menu'
            : `${modal.counter + 1}/${exercises.length}`}
        </h1>
        <LessonContent>{modal.activeModal}</LessonContent>
        <div className="arrow-icons">
          <FaLongArrowAltLeft
            id="arrow-left"
            className="icon"
            style={visibilityLeft}
            onClick={() => {
              if (modal.modalType === MODAL_LESSON_DO) {
                dispatch(
                  arrowLesson(lesson, 'R', modal.counter, template, view)
                );
              } else if (modal.modalType === MODAL_LESSON_TEMPLATE) {
                dispatch(viewResult(lesson, modal.counter));
              } else {
                dispatch(returnValues(lessonSend, modal.counter, exercises));
              }
            }}
          />
          <FaLongArrowAltRight
            id="arrow-right"
            className="icon"
            style={visibilityRight}
            onClick={() => {
              if (modal.modalType === MODAL_LESSON_DO) {
                dispatch(arrowLesson(lesson, 'A', modal.counter, template));
              } else if (modal.modalType === MODAL_LESSON_TEMPLATE) {
                dispatch(viewResult(lesson.exercise, modal.counter));
              } else {
                if (modal.counter === -1) {
                  dispatch(
                    verifyType(
                      lessonSend.subject,
                      lessonSend.theme,
                      lessonSend.difficulty,
                      modal.counter
                    )
                  );
                }
                if (modal.counter >= 0) {
                  dispatch(verifyAnswers(lessonSend, modal.counter, exercises));
                }
              }
            }}
          />
        </div>
      </ModalContainer>
      <Opacity />
    </LessonModalContainer>
  );
}
