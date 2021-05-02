import { LOG_IN, LOG_OUT, START_LOADING, STOP_LOADING } from '../actions';

const INITAL_STATE = {
  nome: '',
  authenticated: false,
  isLoading: false,
};

const userReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
  case START_LOADING:
    return ({
      isLoading: true,
    });
  case STOP_LOADING:
    return ({
      isLoading: false,
    });
  case LOG_IN:
    return ({
      nome: action.payload, authenticated: true, isLoading: false,
    });
  case LOG_OUT:
    return ({
      nome: '', authenticated: false,
    });
  default:
    return state;
  }
};

export default userReducer;
