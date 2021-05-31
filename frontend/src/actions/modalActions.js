import React from 'react';
import { toast, Slide } from 'react-toastify';
import VideoModal from '../pages/Main/Modal/VideoModal';
import ArticleModal from '../pages/Main/Modal/ArticleModal';
import LessonModal from '../pages/Main/Modal/LessonModal';

import {
  VideoSend,
  ModalConfirmation,
  ModalThanked,
} from '../pages/Main/Modal/VideoModal/VideoSend';
import VideoSee from '../pages/Main/Modal/VideoModal/VideoSee';

import ArticleSend from '../pages/Main/Modal/ArticleModal/ArticleSend';
import ArticleRead from '../pages/Main/Modal/ArticleModal/ArticleRead';

import {
  LessonMenu,
  LessonSend,
} from '../pages/Main/Modal/LessonModal/LessonSend';
import { LessonDo, Template } from '../pages/Main/Modal/LessonModal/LessonDo';

import Wording from '../pages/Main/Modal/WordingModal';
import WordingModalView from '../pages/Main/Modal/WordingModal/WordingModalView';

export const openModal = (type) => {
  let modal;
  if (type === 'MODAL_VIDEO') modal = <VideoModal />;
  else if (type === 'MODAL_ARTICLE') modal = <ArticleModal />;
  else if (type === 'MODAL_LESSON') modal = <LessonModal />;
  else if (type === 'MODAL_WORDING') modal = <Wording />;

  return {
    type: 'MODAL_OPENED',
    payload: modal,
  };
};

const configs = (modal, maxW, maxH, minW, minH) => {
  return { modal, maxW, maxH, minW, minH };
};

export const renderModal = (subType, type, counter, noAdd) => {
  let config;

  switch (subType) {
    case 'MODAL_VIDEO_SEND':
      config = configs(<VideoSend />, 48, 90, 10, 30);
      break;
    case 'MODAL_VIDEO_SEE':
      config = configs(<VideoSee />, 60, 90, 10, 30);
      break;
    case 'MODAL_ARTICLE_SEND':
      counter = -1;
      config = configs(<ArticleSend />, 50, 90, 10, 30);
      break;
    case 'MODAL_ARTICLE_READ':
      config = configs(<ArticleRead />, 60, 90, 10, 30);
      break;
    case 'MODAL_LESSON_MENU':
      config = configs(<LessonMenu />, 30, 50, 20, 30);
      break;
    case 'MODAL_LESSON_SEND':
      if (!noAdd) counter++;
      config = configs(<LessonSend />, 45, 90, 20, 20);
      break;
    case 'MODAL_LESSON_TEMPLATE':
      counter = 0;
      config = configs(<Template />, 30, 90, 10, 30);
      break;
    case 'MODAL_LESSON_DO':
      counter = 0;
      config = configs(<LessonDo />, 60, 90, 10, 30);
      break;
    case 'MODAL_CONFIRMATION':
      config = configs(<ModalConfirmation type={type} />, 24, 33, 24, 33);
      break;
    case 'MODAL_WORDING_VIEW':
      config = configs(<WordingModalView />, 40, 90, 24, 33);
      break;
    case 'MODAL_THANKED':
      config = configs(<ModalThanked />, 20, 26, 20, 26);
      break;
  }

  return {
    type: 'MODAL_RENDERED',
    payload: config,
    modalType: subType,
    qty: counter > -1 ? counter : -1,
  };
};

export const closeModal = (type, counter) => {
  return (dispatch) => {
    dispatch({
      type: 'MODAL_CLOSED',
      payload: false,
      counter: type === 'MODAL_ARTICLE_SEND' ? counter : 0,
    });
  };
};

//Soma ou subtrai a qtd de exercícios e percorre o array no localStorage (caso send) ou no estado (caso do).
export const updateCounter = (counter) => {
  return { type: 'COUNTER_UPDATED', payload: counter };
};

export const throwError = (msg, type) => {
  let error;
  if (type === 'error') {
    error = toast.error(msg, {
      transition: Slide,
      position: 'top-center',
      autoClose: 3500,
      //Permite que não haja duplicação do toast.
      toastId: 'error',
    });
  } else if (type === 'warn') {
    error = toast.warn(msg, {
      transition: Slide,
      position: 'top-center',
      autoClose: 3500,
      //Permite que não haja duplicação do toast.
      toastId: 'error',
    });
  }

  return { type: 'ERROR_THREW', error };
};
