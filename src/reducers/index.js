import { combineReducers } from 'redux';
import penalCodeReducer from './penalCode';

const rootReducer = combineReducers({
  data: penalCodeReducer,
});

export default rootReducer;
