import { SAVE_REDUX_DATA, DELETE_CODE, ADD_CODE, UPDATE_FILTERED_LIST } from '../actions';

const INITAL_STATE = {
  codigoPenal: [],
  codigoPenalFiltrado: [],
  status: [],
};

const penalCodeReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
  case SAVE_REDUX_DATA:
    return ({
      ...state, codigoPenal: action.payload,
    });
  case ADD_CODE:
    return ({
      ...state, codigoPenal: action.payload,
    });
  case DELETE_CODE:
    return ({
      ...state, codigoPenal: action.payload,
    });
  case UPDATE_FILTERED_LIST:
    return ({
      ...state, codigoPenalFiltrado: action.payload,
    });
  default:
    return state;
  }
};

export default penalCodeReducer;
