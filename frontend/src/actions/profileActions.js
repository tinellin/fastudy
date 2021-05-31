import React from 'react';
import api from '../services/api';
import { Redirect } from 'react-router-dom';
import { createFile } from '../templates/Preview';
import { limitChar } from '@/mainActions';
import { throwError } from '@/modalActions';
import { openCard } from '@/registerActions';

import { FORM_HEADER } from '../pages/Main/Modal/allModalTypes';

export const changeState = (e) => {
  return (dispatch) => {
    const text = limitChar(e.target.value, 2);
    dispatch({ type: 'STATE_CHANGED', payload: text });
  };
};

export const changeCity = (e) => {
  return { type: 'CITY_CHANGED', payload: e.target.value };
};

export const changeCountry = (e) => {
  return { type: 'COUNTRY_CHANGED', payload: e.target.value };
};

export const changePsw = (e) => {
  return { type: 'PSW_CHANGED', payload: e.target.value };
};

export const changeNewPsw = (e) => {
  return { type: 'NEW_PSW_CHANGED', payload: e.target.value };
};

export const changeConfirmNewPsw = (e) => {
  return { type: 'CONFIRM_NEW_PSW_CHANGED', payload: e.target.value };
};

export const changeUserImg = (e, id) => {
  return (dispatch) => {
    const img = createFile(e.target.files[0]);
    const data = new FormData();
    data.append('imgs', img.file, img.file.name);

    api.post('user/changeImg', data, { FORM_HEADER }).then(() => {
      dispatch({ type: 'IMG_CHANGED' });
    });

    api.post('user/changeImg', { id }).then((res) => {
      dispatch({ type: 'IMG_CHANGED', payload: res.data });
    });
  };
};

export const sendLocation = ({ state, city, country }, id) => {
  return (dispatch) => {
    if (state !== '' && city !== '' && country !== '') {
      const data = { id, state, city, country };
      api.post('user/saveLocation', data).then(() => {
        dispatch(getLocation(id));
      });
    } else {
      dispatch(throwError('Preencha todos os campos corretamente!', 'warn'));
    }
  };
};

export const getLocation = (id) => {
  return (dispatch) => {
    api.post('user/getLocation', { id }).then((res) => {
      dispatch({ type: 'LOCATION_GOT', payload: res.data });
    });
  };
};

export const verifyOldPassword = ({ psw }, id) => {
  return (dispatch) => {
    api.post('user/verifyPassword', { psw, id }).then((res) => {
      dispatch(openCard());
      dispatch({ type: 'PASSWORD_VERIFIED', payload: res.data });
    });
  };
};

export const updatePassword = ({ newPsw, confirmNewPsw }, id, history) => {
  return (dispatch) => {
    if (newPsw !== '' && confirmNewPsw !== '' && newPsw === confirmNewPsw) {
      const data = { psw: confirmNewPsw, id };
      api.post('/user/changePsw', data).then(() => {
        history.push('/login');
      });
    } else {
      dispatch(throwError('Preencha todos os campos corretamente!', 'warn'));
    }
  };
};

export const getCreatedAt = (id) => {
  return (dispatch) => {
    api.post('/user/createdAt', { id }).then((res) => {
      dispatch({ type: 'CREATED_AT_GOT', payload: res.data });
    });
  };
};
