import {getPopularImages} from 'util/unsplash';

const images = getPopularImages();

const initialState = {
  fontSize: 32,
  filter: 'light_contrast',
  availableImages: [],
  selectedImage: null,
  query: "",
  drawing: null,
  size: 'square',
  text: '“Others have seen what is and asked why. I have seen what could be and asked why not.”\n- Pablo Picasso'
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SET_FONT_SIZE':
      return Object.assign({}, state, { fontSize: action.size });
    case 'SET_FILTER':
      return Object.assign({}, state, { filter: action.filter });
    case 'SELECT_IMAGE':
      return Object.assign({}, state, { selectedImage: action.image });
    case 'SET_SIZE':
      return Object.assign({}, state, { size: action.size });
    case 'SET_TEXT':
      return Object.assign({}, state, { text: action.text });
    case 'CACHE_DRAWING':
      return Object.assign({}, state, { drawing: action.drawing });
    case 'RECEIVE_IMAGES':
      return Object.assign({}, state, { availableImages: action.images });
    case 'SET_QUERY':
      return Object.assign({}, state, { query: action.query });
    default:
      return state;
  }
}
