const INITIAL_STATE = {
  thumbnail: '',
  title: '',
  description: '',
  material: [],
  video: '',
  videos: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SUPPORT_MATERIAL_ADDED':
      return { ...state, material: action.payload };
    case 'SUPPORT_MATERIAL_REMOVED':
      return { ...state, material: action.payload };
    case 'SUBJECT_CHANGED':
      return { ...state, subject: action.payload };
    case 'TITLE_CHANGED':
      return { ...state, title: action.payload };
    case 'DESCRIPTION_CHANGED':
      return { ...state, description: action.payload };
    case 'THUMBNAIL_CHANGED':
      return { ...state, thumbnail: action.payload };
    case 'VIDEO_CHANGED':
      return { ...state, video: action.payload };
    case 'SUPPORT_MATERIAL_CHANGED':
      return { ...state, material: action.payload };
    case 'MATERIAL_NAME_CHANGED':
      return { ...state, material: action.payload };
    case 'VIDEOS_GOTTEN':
      return { ...state, videos: action.payload };
    case 'VIDEO_UPLOADED':
      return {
        thumbnail: '',
        title: '',
        description: '',
        material: [],
        video: '',
        videos: '',
      };
    case 'VIDEO_OPENED':
      return { ...state, video: action.payload };
    default:
      return state;
  }
};
