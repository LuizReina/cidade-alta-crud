import { UPDATE_CODE_LISTS, UPDATE_FILTERED_LIST } from '../actions';
import INITAL_STATE_MOCKED from '../mockedData';

const INITAL_STATE = {
  codigoPenal: [],
  codigoPenalFiltrado: [],
};

const penalCodeReducer = (state = INITAL_STATE_MOCKED, action) => {
  switch (action.type) {
  case UPDATE_CODE_LISTS:
    return ({
      ...state, codigoPenal: action.payload, codigoPenalFiltrado: action.payload,
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
