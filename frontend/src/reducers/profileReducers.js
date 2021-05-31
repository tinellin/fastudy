const INITIAL_STATE = {
  state: '',
  city: '',
  country: '',
  psw: '',
  disable: false,
  newPsw: '',
  confirmNewPsw: '',
  img: '',
  data: '',
  location: {},
  createdAt: '',
  component: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'STATE_CHANGED':
      return { ...state, state: action.payload };
    case 'CITY_CHANGED':
      return { ...state, city: action.payload };
    case 'COUNTRY_CHANGED':
      return { ...state, country: action.payload };
    case 'PSW_CHANGED':
      return { ...state, psw: action.payload };
    case 'NEW_PSW_CHANGED':
      return { ...state, newPsw: action.payload };
    case 'CONFIRM_NEW_PSW_CHANGED':
      return { ...state, confirmNewPsw: action.payload };
    case 'PASSWORD_VERIFIED':
      return { ...state, disable: action.payload };
    case 'IMG_CHANGED':
      return { ...state, img: action.payload };
    case 'LOCATION_SENT':
      return { ...state, data: action.payload };
    case 'LOCATION_GOT':
      return { ...state, location: action.payload };
    case 'CREATED_AT_GOT':
      return { ...state, createdAt: action.payload };
    default:
      return state;
  }
};
