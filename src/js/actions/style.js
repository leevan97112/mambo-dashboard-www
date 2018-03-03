import {CALL_API} from '../client/api';

/*------------------------------------------------------------------------------------------
 * Style actions
 *-----------------------------------------------------------------------------------------*/
export const CHANGE_MAP_STYLE = 'CHANGE_MAP_STYLE';

export const changeMapStyle = (style) => ({
  type: CHANGE_MAP_STYLE,
  style: style
});

/*------------------------------------------------------------------------------------------
 * Loads layers
 *-----------------------------------------------------------------------------------------*/
export const LOAD_LAYERS_REQUEST = 'LOAD_LAYERS_REQUEST';
export const LOAD_LAYERS_SUCCESS = 'LOAD_LAYERS_SUCCESS';
export const LOAD_LAYERS_FAILURE = 'LOAD_LAYERS_FAILURE';

const loadLayersAsync = () => ({
  [CALL_API]: {
    types: [ LOAD_LAYERS_REQUEST, LOAD_LAYERS_SUCCESS, LOAD_LAYERS_FAILURE ],
    endpoint: `http://localhost:3001/layers`,
    method: 'GET'
  }
});

export const loadLayers = () => (dispatch) => {
  return dispatch(loadLayersAsync());
};

/*------------------------------------------------------------------------------------------
 * Create style
 *-----------------------------------------------------------------------------------------*/
export const CREATE_STYLE_REQUEST = 'CREATE_STYLE_REQUEST';
export const CREATE_STYLE_SUCCESS = 'CREATE_STYLE_SUCCESS';
export const CREATE_STYLE_FAILURE = 'CREATE_STYLE_FAILURE';

const createStyleAsync = () => ({
  [CALL_API]: {
    types: [ CREATE_STYLE_REQUEST, CREATE_STYLE_SUCCESS, CREATE_STYLE_FAILURE ],
    endpoint: `http://localhost:3001/layers`,
    method: 'Post'
  }
});

export const createStyle = (style) => (dispatch) => {
  console.log(style);
  return dispatch(createStyleAsync());
};