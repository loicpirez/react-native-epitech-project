import registerActionsTypes from './register-actions-types';

const registerActions = {
  registerRequest: payload => ({ type: registerActionsTypes.REGISTER_REQUEST, payload }),
  registerSuccess: payload => ({ type: registerActionsTypes.REGISTER_SUCCESS, payload }),
  registerFailure: payload => ({ type: registerActionsTypes.REGISTER_FAILURE, payload })
};

export default signInActions;
