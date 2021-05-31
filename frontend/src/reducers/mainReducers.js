import React from 'react';
import Home from '../pages/Main/Home';

const INITIAL_STATE = {
  component: <Home />,
  cType: 'HOME',
  txt: '',
  icon: '',
  menu: '',
  subjectId: '',
  subject: '',
  statistic: '',
  pages: [],
  page: 1,
  currentPage: 0,
  j: 1,
  k: 0,
  sideBar: {
    width: '15',
    marginTop: '28',
    display: { display: 'none' },
    marginLeft: '-15',
  },
  expanded: false,
  search: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'WHICH_RENDER':
      return { ...state, component: action.payload, cType: action.cType };
    case 'CHOICE_SELECTED':
      return { ...state, choiceSelected: action.payload };
    case 'MOUSE_OVERED':
      return { ...state, txt: action.payload };
    case 'SUBJECT_CLICKED':
      return { ...state, icon: action.payload };
    case 'SUBJECT_SELECTED': {
      return { ...state, subjectId: action.payload, subject: action.name };
    }
    case 'USER_MENU_OPENED':
      return { ...state, menu: action.payload };
    case 'USER_MENU_CLOSED':
      return { ...state, menu: '' };
    case 'STATISTICS_GOTTEN':
      return { ...state, statistic: action.payload };
    case 'PAGES_DEFINED':
      return { ...state, pages: action.payload, j: action.j, k: action.k };
    case 'CURRENT_PAGE_DEFINED':
      return { ...state, currentPage: action.payload };
    case 'SIDE_BAR_EXPANDED':
      return { ...state, sideBar: action.payload, expanded: action.expanded };
    case 'SIDE_BAR_CLOSED':
      return { ...state, sideBar: action.payload, expanded: action.expanded };
    case 'SEARCH_CHANGED':
      return { ...state, search: action.payload };
    default:
      return state;
  }
};
