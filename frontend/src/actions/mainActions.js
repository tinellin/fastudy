import React from 'react';
import Home from '../pages/Main/Home';
import Video from '../pages/Main/VideoList';
import Article from '../pages/Main/ArticleList';
import Lesson from '../pages/Main/LessonList';
import UserMenu from '../pages/Main/Navbar/UserMenu';
import api from '../services/api';
import { Square } from '../pages/Main/Pagination';

import { getAllVideos } from '@/videosActions';
import { getAllArticles } from '@/articleActions';
import { getAllLessons, getFeedback } from '@/lessonDoActions';
import { verifyToken } from '@/authActions';

export const render = (component, title) => {
  let render;
  if (component === 'HOME') render = <Home />;
  else if (component === 'VIDEO') render = <Video />;
  else if (component === 'ARTICLE') render = <Article />;
  else if (component === 'LESSON') render = <Lesson title={title} />;
  else if (component === 'FEEDBACK') render = <Lesson title={title} />;

  return { type: 'WHICH_RENDER', payload: render, cType: component };
};

export const mouseOverText = (txt) => {
  return { type: 'MOUSE_OVERED', payload: txt };
};

export const clickSubject = () => {
  const icon = {
    color: 'white',
    backgroundColor: '#007bff',
  };

  return { type: 'SUBJECT_CLICKED', payload: icon };
};

export const selectSubject = (subjectId, name) => {
  return { type: 'SUBJECT_SELECTED', payload: subjectId, name };
};

export const openUserMenu = () => {
  return { type: 'USER_MENU_OPENED', payload: <UserMenu /> };
};

export const closeUserMenu = () => {
  return { type: 'USER_MENU_CLOSED' };
};

export const getStatistics = (id) => {
  return (dispatch) => {
    api.post('statistic/get', { id }).then((resp) => {
      dispatch({ type: 'STATISTICS_GOTTEN', payload: resp.data });
    });
  };
};

export const limitChar = (text, limit) => {
  return text.length > limit ? text.slice(0, limit) : text;
};

export const sendPagination = () => {
  const responsive = window.innerWidth;
  return responsive <= 375 ? 3 : 10;
};

export const definePages = (page, pages, type, data, j, k, search) => {
  return (dispatch) => {
    let squares = [];

    if (page === 1) j = 1;
    if (pages <= 5) k = pages;

    if (pages > 5 && page === 1) {
      k = 5;
    }

    if (page === k && page !== pages) {
      j = k;
      if (k + 5 > pages) {
        k = pages;
      } else if (k + 5 < pages) {
        k = k + 5;
      }
    }

    if (page < j) {
      k = j;
      j = j - 4;
    }

    for (let i = j; i <= k; i++) {
      squares.push(
        <Square
          children={i}
          key={i}
          onClick={() => {
            if (type === 'VIDEO') dispatch(getAllVideos(data, i, search, j, k));
            if (type === 'ARTICLE')
              dispatch(getAllArticles(data, i, search, j, k));
            if (type === 'LESSON')
              dispatch(getAllLessons(data.id, data.subjectId, i, search, j, k));
            if (type === 'FEEDBACK')
              dispatch(getFeedback(data, i, search, j, k));
          }}
          style={
            i === page
              ? { backgroundColor: '#007bff', color: 'white' }
              : { backgroundColor: 'white', color: 'black' }
          }
        />
      );
    }

    dispatch({ type: 'PAGES_DEFINED', payload: squares, j, k });
  };
};

export const defineCurrentPage = (page) => {
  return (dispatch) => {
    dispatch({ type: 'CURRENT_PAGE_DEFINED', payload: page });
  };
};

export const expandSideBar = () => {
  let sideBar = {
    width: '50',
    marginTop: '0',
    marginLeft: '0',
  };

  return { type: 'SIDE_BAR_EXPANDED', payload: sideBar, expanded: true };
};

export const closeSideBar = () => {
  let sideBar = {
    width: '15',
    marginTop: '28',
    marginLeft: '-15',
    display: { display: 'none' },
  };

  return { type: 'SIDE_BAR_CLOSED', payload: sideBar, expanded: false };
};

export const changeSearch = (e) => {
  return { type: 'SEARCH_CHANGED', payload: e.target.value };
};

export const clearSearch = (type, subjectId, page, id, search, j, k) => {
  return (dispatch) => {
    if (search === '') {
      if (type === 'VIDEO')
        dispatch(getAllVideos(subjectId, page, search, j, k));
      else if (type === 'ARTICLE')
        dispatch(getAllArticles(subjectId, page, search, j, k));
      else if (type === 'LESSON')
        dispatch(getAllLessons(id, subjectId, page, search, j, k));
      else if (type === 'FEEDBACK')
        dispatch(getFeedback(id, subjectId, page, search, j, k));
    }
  };
};

export const clickSearch = (type, subjectId, page, id, search, j, k) => {
  return (dispatch) => {
    if (search !== '') {
      if (type === 'VIDEO')
        dispatch(getAllVideos(subjectId, page, search, j, k));
      else if (type === 'ARTICLE')
        dispatch(getAllArticles(subjectId, page, search, j, k));
      else if (type === 'LESSON')
        dispatch(getAllLessons(id, subjectId, page, search, j, k));
      else if (type === 'FEEDBACK')
        dispatch(getFeedback(id, subjectId, page, search, j, k));
    }
    dispatch({ type: 'SEARCH_CLICKED' });
  };
};

export const disconnect = () => {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch(verifyToken());
    dispatch({ type: 'DISCONNECTED' });
  };
};
