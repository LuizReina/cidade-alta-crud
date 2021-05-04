import {
  UPDATE_CODE_LISTS,
  UPDATE_FILTERED_LIST,
  UPDATE_PAGINATION_LIST,
} from '../actions';
// import INITIAL_STATE_MOCKED from '../mockedData';

const INITIAL_STATE = {
  codigoPenal: [],
  codigoPenalFiltrado: [],
  codigoPenalPaginado: [[]],
};

const penalCodeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case UPDATE_CODE_LISTS:
    return ({
      ...state, codigoPenal: action.payload, codigoPenalFiltrado: action.payload,
    });
  case UPDATE_FILTERED_LIST:
    return ({
      ...state, codigoPenalFiltrado: action.payload,
    });
  case UPDATE_PAGINATION_LIST:
    return ({
      ...state, codigoPenalPaginado: action.payload,
    });
  default:
    return state;
  }
};

export default penalCodeReducer;
