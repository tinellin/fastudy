import { combineReducers } from 'redux';

import registerReducers from './reducers/registerReducers';
import authReducers from './reducers/authReducers';
import mainReducers from './reducers/mainReducers';
import profileReducers from './reducers/profileReducers';
import modalReducers from './reducers/modalReducers';
import videosReducers from './reducers/videosReducers';
import articleReducers from './reducers/articleReducers';
import lessonSend from './reducers/lessonSendReducers';
import lessonDo from './reducers/lessonDoReducers';

const rootReducer = combineReducers({
  register: registerReducers,
  auth: authReducers,
  main: mainReducers,
  profile: profileReducers,
  modal: modalReducers,
  videos: videosReducers,
  article: articleReducers,
  lessonSend: lessonSend,
  lessonDo: lessonDo,
});

export default rootReducer;
