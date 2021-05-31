import { limitChar } from '@/mainActions';

export const changePerson = (e) => {
  return (dispatch) => {
    const text = limitChar(e.target.value, 40);
    dispatch({ type: 'PERSON_CHANGED', payload: text });
  };
};

export const changeEmail = (e) => ({
  type: 'EMAIL_CHANGED',
  payload: e.target.value,
});

export const changePassword = (e) => ({
  type: 'PASSWORD_CHANGED',
  payload: e.target.value,
});

export const changeConfirm = (e) => ({
  type: 'CONFIRM_CHANGED',
  payload: e.target.value,
});

export const openCard = () => {
  return {
    type: 'CARD_OPENED',
  };
};

export const closeCard = (close) => {
  if (close === true) {
    return {
      type: 'CARD_CLOSED',
    };
  } else {
    return {
      type: 'CARD_OPENED',
    };
  }
};

export const verifyPassword = (password) => {
  const upper = new RegExp('[A-Z]');
  const lower = new RegExp('[a-z]');
  const special = new RegExp('[!@#$%^&*(),.?:{}|<>]');

  const color = {
    characters: password.length >= 8 ? 'done' : 'cancel',
    upper: upper.test(password) ? 'done' : 'cancel',
    lower: lower.test(password) ? 'done' : 'cancel',
    special: special.test(password) ? 'done' : 'cancel',
  };

  if (
    color.characters === 'done' &&
    color.upper === 'done' &&
    color.lower === 'done' &&
    color.special === 'done'
  ) {
    return { type: 'VERIFIED_PASSWORD', payload: color, close: true };
  } else {
    return { type: 'VERIFIED_PASSWORD', payload: color, close: false };
  }
};
