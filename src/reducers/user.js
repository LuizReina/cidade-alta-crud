// import { SAVE_REDUX_DATA, DELETE_CODE, ADD_CODE } from '../actions';

const INITAL_STATE = {
  nome: '',
  authenticated: false,
};

const userReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
  case 'LOG_IN':
    return ({
      nome: action.payload, authenticated: true,
    });
  case 'LOG_OUT':
    return ({
      nome: '', authenticated: false,
    });
  default:
    return state;
  }
};

export default userReducer;
