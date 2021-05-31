import React from 'react';

import {
  Topic,
  Text,
  Image,
} from '../pages/Main/Modal/ArticleModal/ArticleTypes';

import { createFile } from '../templates/Preview';
import { updateCounter, throwError, renderModal } from '@/modalActions';
import { defineCurrentPage, definePages, sendPagination } from '@/mainActions';

import {
  FORM_HEADER,
  MODAL_CONFIRMATION,
  MODAL_THANKED,
} from '../pages/Main/Modal/allModalTypes';

import api from '../services/api';

export const setDashed = (type) => {
  const border = '4px dashed #007bff';
  const marginTop = '3%';
  let dashed = {};

  if (type === 1)
    dashed = { width: '380px', height: '48px', border, marginTop };
  if (type === 2)
    dashed = { width: '850px', height: '120px', border, marginTop };
  if (type === 3)
    dashed = { width: '350px', height: '200px', border, marginTop };

  return { type: 'DASHED_SET', payload: dashed };
};

export const clearDashed = () => {
  return { type: 'DASHED_CLEARED' };
};

export const setType = (type) => {
  return { type: 'TYPE_SET', payload: type };
};

export const createComponent = (type, component, counter, imgCounter) => {
  let which;
  counter++;

  if (type === 1) which = <Topic counter={counter} key={counter} />;

  if (type === 2) which = <Text counter={counter} key={counter} />;

  if (type === 3)
    which = <Image counter={counter} imgCounter={imgCounter} key={counter} />;

  component.push(which);

  return (dispatch) => {
    dispatch(updateCounter(counter));
    dispatch({ type: 'COMPONENT_CREATED', payload: component, counter });
  };
};

export const changeTitle = (e) => {
  return { type: 'TITLE_CHANGED', payload: e.target.value };
};

export const changeSubtitle = (e) => {
  return { type: 'SUBTITLE_CHANGED', payload: e.target.value };
};

export const changeSubject = (e) => {
  return { type: 'SUBJECT_CHANGED', payload: e.target.value };
};

export const changeTopic = (e, content, counter) => {
  content[counter] = { type: 'topic', content: e.target.value };
  return { type: 'TOPIC_CHANGED', payload: content };
};

export const changeText = (e, content, counter) => {
  content[counter] = { type: 'text', content: e.target.value };
  return { type: 'TEXT_CHANGED', payload: content };
};

export const changeImage = (e, content, files, counter, imgCounter) => {
  let img = e.target.files[0];
  let file = createFile(img);
  files[imgCounter] = file;
  imgCounter++;
  content[counter] = { type: 'image', content: true };
  return { type: 'IMAGE_CHANGED', content, files, imgCounter };
};

export const sendArticle = (article, content, files, user) => {
  const { title, subtitle, subject } = article;

  return (dispatch) => {
    content.every((item) => {
      if (title !== '' && subject > 0) {
        if (item.content !== '') {
          const data = new FormData();
          files.map((item) => {
            data.append('imgs', item.file, item.file.name);
          });

          const article = { title, subtitle, content, subject, user };
          const json = JSON.stringify(article);
          const blob = new Blob([json], { type: 'application/json' });
          data.append('tmp', blob);

          api.post('/article/create', data, { FORM_HEADER });
          dispatch({ type: 'ARTICLE_SENT' });
          dispatch(renderModal(MODAL_THANKED));
        }
      } else {
        dispatch(throwError('Preencha todos os campos corretamente!', 'warn'));
      }
    });
  };
};

export const getAllArticles = (subjectId, page, search, j, k) => {
  return (dispatch) => {
    const qty = sendPagination();
    if (page !== 0) {
      api
        .post('/article/getall', { subjectId, page, qty, search })
        .then((res) => {
          const { articles, pages } = res.data;
          if (page <= pages) {
            dispatch(defineCurrentPage(page));
            dispatch(
              definePages(page, pages, 'ARTICLE', subjectId, j, k, search)
            );
            dispatch({ type: 'ARTICLES_GOTTEN', payload: articles });
          }
        });
    }
  };
};

export const openArticle = (id, allArticles) => {
  const article = allArticles.find((article) => article.id === id);
  return { type: 'ARTICLE_OPENED', payload: article };
};
