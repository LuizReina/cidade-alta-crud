import { INCLUDE_FILTERS } from '../actions';

const INITAL_STATE = {
  palavraChave: '',
  filtro: 'multa',
  ordenacao: 'crescente',
};

const filterReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
  case INCLUDE_FILTERS:
    return ({
      ...action.payload,
    });
  default:
    return state;
  }
};

export default filterReducer;