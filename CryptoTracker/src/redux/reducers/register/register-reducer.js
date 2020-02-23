import { combineReducers } from 'redux';
import registerActionsTypes from './register-actions-types';

// state = { isLogged: false}

const isFetching = (state = false, action) => {
  switch (action.type) {
    case registerActionsTypes.REGISTER_REQUEST:
      return true;
    case registerActionsTypes.REGISTER_SUCCESS:
      return false;
    case registerActionsTypes.REGISTER_FAILURE:
      return false;
    default:
      return state;
  }
};

const isLogged = (state = false, action) => {
  switch (action.type) {
    case registerActionsTypes.REGISTER_REQUEST:
      return false;
    case registerActionsTypes.REGISTER_SUCCESS: {
      console.log('registerSuccess');
      return true;
    }
    case registerActionsTypes.REGISTER_FAILURE:
      return false;
    default:
      return state;
  }
};

const signInReducer = combineReducers({
  // eslint-disable-line
  isFetching,
  isLogged
});

export default isFetching;
