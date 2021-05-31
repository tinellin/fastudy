const INITIAL_STATE = {
  subject: '',
  theme: '',
  difficulty: '',
  count: 0,
  submit: false,
  files: [],
  fields: {
    title: '',
    question: '',
    img: false,
    opcionalQuestion: '',
    answers: [],
    correct: '',
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SUBJECT_CHANGED':
      return { ...state, subject: action.payload };
    case 'THEME_CHANGED':
      return { ...state, theme: action.payload };
    case 'DIFFICULTY_CHANGED':
      return { ...state, difficulty: action.payload };
    case 'TITLE_CHANGED':
      return { ...state, fields: { ...state.fields, title: action.payload } };
    case 'QUESTION_CHANGED': {
      return {
        ...state,
        fields: { ...state.fields, question: action.payload },
      };
    }
    case 'IMAGE_CHANGED':
      return {
        ...state,
        files: action.payload,
        fields: { ...state.fields, img: true },
      };
    case 'OPCIONAL_QUESTION_CHANGED':
      return {
        ...state,
        fields: { ...state.fields, opcionalQuestion: action.payload },
      };
    case 'CORRECT_CHANGED':
      return {
        ...state,
        fields: { ...state.fields, correct: action.payload },
      };
    case 'ANSWERS_CHANGED':
      return { ...state, fields: { ...state.fields, answers: action.payload } };
    case 'ANSWER_CREATED':
      return {
        ...state,
        fields: { ...state.fields, answers: action.payload },
        count: action.count,
      };
    case 'ANSWER_REMOVED':
      return {
        ...state,
        count: action.count,
        //Remover último elemento do array.
        fields: {
          ...state.fields,
          answers: state.fields.answers.slice(0, -1),
        },
      };
    case 'FIELDS_VERIFIED_SUCCESS':
      return {
        ...state,
        count: 0,
        img: '',
        fields: {
          title: '',
          question: '',
          img: false,
          opcionalQuestion: '',
          correct: '',
        },
      };
    case 'COUNT_LETTER_SETTED':
      return { ...state, count: action.payload };
    case 'SKETCH_CREATED':
      action.exercises[action.counter] = INITIAL_STATE.fields;
      localStorage.setItem('exercises', JSON.stringify(action.exercises));
      return { ...state };
    case 'VALUES_RETURNED':
      return { ...state, img: action.img, fields: action.payload };
    case 'VALUES_ADVANCED':
      return { ...state, img: action.img, fields: action.payload };
    default:
      return state;
  }
};
