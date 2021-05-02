import {
  LOG_IN,
  LOG_OUT,
  START_LOADING,
  STOP_LOADING,
  UPDATE_PAGE_NUMBER,
} from '../actions';

const INITIAL_STATE = {
  nome: '',
  authenticated: false,
  isLoading: false,
  paginaAtual: 0,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case START_LOADING:
    return ({
      ...state, isLoading: true,
    });
  case STOP_LOADING:
    return ({
      ...state, isLoading: false,
    });
  case LOG_IN:
    return ({
      ...state, nome: action.payload, authenticated: true, isLoading: false,
    });
  case LOG_OUT:
    return ({
      nome: '', authenticated: false,
    });
  case UPDATE_PAGE_NUMBER:
    return ({
      ...state, paginaAtual: action.payload - 1,
    });
  default:
    return state;
  }
};

export default userReducer;
