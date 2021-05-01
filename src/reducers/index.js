import { combineReducers } from 'redux';
import penalCodeReducer from './penalCode';
import userReducer from './user';

const rootReducer = combineReducers({
  user: userReducer,
  data: penalCodeReducer,
});

export default rootReducer;
