import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { AuthStateInterface } from '../types/authState.interface';

export const authFeatureSelector =
  createFeatureSelector<AuthStateInterface>('auth');

export const isSubmittedSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitted
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.validationsErrors
);

export const isLoggeInSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoggedIn
);

export const isAnonymouSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoggedIn === false
);

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.currentUser
);
