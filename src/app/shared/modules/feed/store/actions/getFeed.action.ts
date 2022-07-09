import { createAction, props } from '@ngrx/store';
import { GetFeedResposeInterface } from '../../types/getFeedResponse.interface';
import { ActionTypes } from '../actionTypes';

export const getFeedAction = createAction(
  ActionTypes.GET_FEED,
  props<{ url: string }>()
);

export const getFeedSuccesAction = createAction(
  ActionTypes.GET_FEED_SUCCESS,
  props<{ feed: GetFeedResposeInterface }>()
);

export const getFeedFailureAction = createAction(ActionTypes.GET_FEED_FAILURE);
