import { combineReducers } from 'redux';
import filterReducer from './filters';
import penalCodeReducer from './penalCode';
import userReducer from './user';

const rootReducer = combineReducers({
  user: userReducer,
  data: penalCodeReducer,
  activeFilters: filterReducer,
});

export default rootReducer;
