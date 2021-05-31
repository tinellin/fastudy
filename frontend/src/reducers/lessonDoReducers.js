const INITIAL_STATE = {
  allLessons: [],
  lesson: [],
  allTemplate: [''],
  template: [],
  key: '',
  exercise: '',
  correct: '',
  view: false,
  questionsColor: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LESSONS_GOTTEN':
      return { ...state, allLessons: action.payload, view: false };
    case 'LESSON_OPENED':
      return { ...state, lesson: action.payload, key: action.key };
    case 'LESSON_ADVANCED':
      return {
        ...state,
        exercise: action.payload,
        template: action.correct,
      };
    case 'CORRECT_CHANGED':
      return { ...state, template: action.payload };
    case 'LESSON_CORRECTED':
      return {
        ...state,
        questionsColor: action.payload,
        allLessons: action.lesson,
      };
    case 'RESULT_VIEWED':
      return { ...state, exercise: action.payload, view: action.payload };
    case 'LESSON_CLEANED':
      return {
        ...state,
        lesson: [],
        view: false,
        template: [''],
        questionsColor: '',
        correct: '',
        key: '',
      };
    case 'FEEDBACK_GOTTEN':
      return {
        ...state,
        allLessons: action.lesson,
        allTemplate: action.answers,
        view: true,
      };
    case 'FEEDBACK_BY_ID_GOTTEN':
      return { ...state, template: action.payload };
    case 'FEEDBACK_CLEANED':
      return {
        ...state,
        lesson: [],
        template: [''],
        questionsColor: '',
        view: true,
      };
    default:
      return state;
  }
};
