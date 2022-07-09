import { createReducer, on, Action } from '@ngrx/store';
import { FeedStateInterface } from '../types/feeState.interface';
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccesAction,
} from './actions/getFeed.action';

export const initState: FeedStateInterface = {
  isLoading: false,
  data: null,
  errors: null,
};
const feedReducer = createReducer(
  initState,
  on(
    getFeedAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),

  on(
    getFeedSuccesAction,
    (state, action): FeedStateInterface => ({
      ...state,
      isLoading: false,
      data: action.feed,
    })
  ),
  on(
    getFeedFailureAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);
export function reducers(state: FeedStateInterface, action: Action) {
  return feedReducer(state, action);
}
