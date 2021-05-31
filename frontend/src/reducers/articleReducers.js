const INITIAL_STATE = {
  type: '',
  title: '',
  subtitle: '',
  subject: '',
  imgCounter: 0,
  content: [],
  files: [],
  component: [],
  dashed: {},
  allArticles: [],
  article: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TYPE_SET':
      return { ...state, type: action.payload };
    case 'DASHED_SET':
      return { ...state, dashed: action.payload };
    case 'DASHED_CLEARED':
      return { ...state, dashed: {} };
    case 'COMPONENT_CREATED':
      return { ...state, component: action.payload };
    case 'TITLE_CHANGED': {
      return { ...state, title: action.payload };
    }
    case 'SUBTITLE_CHANGED': {
      return { ...state, subtitle: action.payload };
    }
    case 'SUBJECT_CHANGED': {
      return { ...state, subject: action.payload };
    }
    case 'TITLE_CHANGED': {
      return { ...state, title: action.payload };
    }
    case 'TOPIC_CHANGED':
      return { ...state, content: action.payload };
    case 'TEXT_CHANGED':
      return { ...state, content: action.payload };
    case 'IMAGE_CHANGED':
      return {
        ...state,
        content: action.content,
        files: action.files,
        imgCounter: action.imgCounter,
      };
    case 'ARTICLES_GOTTEN': {
      return { ...state, allArticles: action.payload };
    }
    case 'ARTICLE_OPENED': {
      return { ...state, article: action.payload };
    }
    case 'ARTICLE_SENT': {
      return {
        title: '',
        subtitle: '',
        subject: '',
        imgCounter: 0,
        content: [],
        component: [],
        files: [],
      };
    }
    default:
      return state;
  }
};
