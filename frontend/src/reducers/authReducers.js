const INITIAL_STATE = {
  component: '',
  isLogged: false,
  username: '',
  userType: '',
  error: '',
  data: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'VALIDATED':
      return {
        submit: true,
        isLogged: true,
        error: action.error,
        data: action.data,
      };
    case 'TOKEN_VERIFIED':
      return { ...state, component: action.payload, isLogged: action.auth };
    case 'TOKEN_DECODED':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
