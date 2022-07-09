import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FeedStateInterface } from '../types/feeState.interface';

export const feedFeatureSelector =
  createFeatureSelector<FeedStateInterface>('feed');

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.isLoading
);

export const feedSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.data
);

export const errorSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.errors
);
