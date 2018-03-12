import * as ActionTypes from '../actions/style';
import merge from 'lodash.merge';

const profile = (state = {
  styles: [],
  selectedStyle: null,
  popupOpen: false
}, action) => {
  const {type} = action;

  switch (type) {
    case ActionTypes.CHANGE_MAP_STYLE :
      return merge({}, state, {selectedStyle: null}, {selectedStyle: action.style});

    case ActionTypes.LOAD_LAYERS_SUCCESS:
      let styles = [];
      let defaultStyle = null;
      Object.keys(action.result).forEach((k) => {
        let s = Object.assign({id: k}, action.result[k]);
        styles.push(s);
        if (s.meta.default) {
          defaultStyle = s; 
        }
      });
      return merge({}, state, {styles: styles, selectedStyle: defaultStyle});

    case ActionTypes.OPEN_MAP_STYLE_POPUP:
      return merge({}, state, {popupOpen: false}, {popupOpen: action.open});

    // case ActionTypes.CREATE_STYLE_SUCCESS:
    //   return merge({}, state, {popupOpen: false}, {popupOpen: action.open});

  }

  return state;
};


export default profile;
