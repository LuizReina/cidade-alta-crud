import { SAVE_REDUX_DATA, DELETE_CODE, ADD_CODE } from '../actions';

const INITAL_STATE = {
  codigoPenal: [],
  status: [],
};

const penalCodeReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
  case SAVE_REDUX_DATA:
    return ({
      ...state, codigoPenal: action.payload[0], status: action.payload[1],
    });
  case DELETE_CODE || ADD_CODE:
    return ({
      ...state, codigoPenal: action.payload,
    });
  default:
    return state;
  }
};

export default penalCodeReducer;
