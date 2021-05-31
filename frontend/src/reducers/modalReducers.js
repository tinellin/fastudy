const INITIAL_STATE = {
  isOpen: false,
  activeModal: '',
  modalType: '',
  counter: 0,
  error: '',
  maxW: '',
  maxH: '',
  minW: '',
  minH: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'MODAL_OPENED':
      return { ...state, isOpen: action.payload };
    case 'MODAL_RENDERED':
      let { modal, maxW, maxH, minW, minH } = action.payload;
      return {
        ...state,
        modalType: action.modalType,
        counter: action.qty,
        activeModal: modal,
        maxW,
        maxH,
        minW,
        minH,
      };
    case 'MODAL_CLOSED':
      return {
        ...state,
        modalType: '',
        isOpen: action.payload,
        counter: action.counter,
      };
    case 'COUNTER_UPDATED': {
      return { ...state, counter: action.payload };
    }
    case 'ERROR_THREW': {
      return { ...state, error: action.error };
    }
    case 'TYPE_VERIFIED':
      return { ...state, error: action.error };
    default:
      return state;
  }
};
