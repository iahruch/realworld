import { createReducer, on, Action } from '@ngrx/store';
import { AuthStateInterface } from '../types/authState.interface';
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from './actions/login.action';

const initState: AuthStateInterface = {
  isSubmitted: false,
  currentUser: null,
  isLoggedIn: null,
  validationsErrors: null,
};

const authReducer = createReducer(
  initState,
  on(
    loginAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitted: true,
      validationsErrors: null,
    })
  ),

  on(
    loginSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitted: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),

  on(
    loginFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitted: false,
      validationsErrors: action.errors,
    })
  )
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
