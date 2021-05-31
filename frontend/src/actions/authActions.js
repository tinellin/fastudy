import React from 'react';
import { Redirect } from 'react-router-dom';
import { Error } from '../templates/Error';

import api from '../services/api';

const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const signup = (
  { email, password, username, confirm },
  close,
  e,
  history
) => {
  e.preventDefault();

  if (
    username !== '' &&
    email !== '' &&
    emailRegex.test(email) === true &&
    password !== '' &&
    close === true &&
    confirm !== '' &&
    confirm === password
  ) {
    return (dispatch) => {
      const values = { userType: 'student', username, email, password };

      api
        .post('user/create', values)
        .then((resp) => {
          history.push('/login');
        })
        .catch((err) => {
          const { message } = err.response.data;
          dispatch({
            type: 'VALIDATED',
            error: <Error text={message} />,
          });
        });

      dispatch({
        type: 'VALIDATED',
        error: '',
      });
      dispatch({
        type: 'VALIDATED',
        payload: true,
      });
    };
  } else {
    return {
      type: 'VALIDATED',
      error: <Error text="Preencha todos os campos corretamente!" />,
    };
  }
};

export const login = ({ email, password }, history, e) => {
  e.preventDefault();

  if (email !== '' && emailRegex.test(email) === true && password !== '') {
    return (dispatch) => {
      const values = { username: email, password };
      api
        .post('/auth', values)
        .then((resp) => {
          const { data } = resp;
          if (data) {
            localStorage.setItem('token', data.token);
            dispatch(verifyToken());
            history.push('/main');
          }
          dispatch({
            type: 'DATA_GETTED',
            payload: data,
          });
        })
        .catch((err) => {
          const { message } = err.response.data;
          dispatch({
            type: 'VALIDATED',
            error: <Error text={message} />,
          });
        });
    };
  } else {
    return {
      type: 'VALIDATED',
      error: <Error text="Preencha os campos corretamente!" />,
      payload: false,
    };
  }
};

export const verifyToken = () => {
  const payload = localStorage.getItem('token');

  return (dispatch) => {
    return api
      .post('/verify', { token: payload })
      .then(
        () =>
          dispatch({
            type: 'TOKEN_VERIFIED',
            auth: true,
          }),
        dispatch(getUser(payload))
      )
      .catch(() => {
        dispatch({
          type: 'TOKEN_VERIFIED',
          payload: <Redirect to="/login" />,
          auth: false,
        });
      });
  };
};

const getUser = (token) => {
  return (dispatch) => {
    try {
      let tokenParsed = parseJwt(token);
      dispatch({ type: 'TOKEN_DECODED', payload: tokenParsed });
    } catch (e) {
      return null;
    }
  };
};

//Função para decodificar o token JWT .
function parseJwt(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map((c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );

  return JSON.parse(jsonPayload);
}
