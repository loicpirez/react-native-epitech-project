import { combineReducers } from 'redux';
import signInReducer from './reducers/sign-in/sign-in-reducer';

const rootReducer = combineReducers({
  signInReducer
});

export default rootReducer;
