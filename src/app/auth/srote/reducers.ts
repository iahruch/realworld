import { state } from '@angular/animations';
import { createReducer, on, Action } from '@ngrx/store';
import { AuthStateInterface } from '../types/authState.interface';
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from './actions/getCurrentUser.action';
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from './actions/login.action';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from './actions/register.action';

const initState: AuthStateInterface = {
  isSubmitted: false,
  isLoading: false,
  currentUser: null,
  isLoggedIn: null,
  validationsErrors: null,
};

const authReducer = createReducer(
  initState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitted: true,
      validationsErrors: null,
    })
  ),

  on(
    registerSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitted: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),

  on(
    registerFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitted: false,
      validationsErrors: action.errors,
    })
  ),
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
  ),
  on(
    getCurrentUserAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getCurrentUserSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isLoading: false,
      currentUser: action.currentUser,
      isLoggedIn: true,
    })
  ),
  on(
    getCurrentUserFailureAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: false,
      isLoggedIn: false,
      currentUser: null,
    })
  )
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
