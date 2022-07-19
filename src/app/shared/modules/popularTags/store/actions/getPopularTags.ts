import { createAction, props } from '@ngrx/store';
import { PopularTagsType } from '../../types/popularTagsType';
import { ActionTypes } from '../actionsType';

export const getPopularTags = createAction(ActionTypes.GET_POPULAR_TAGS);

export const getPopularTagsSuccess = createAction(
  ActionTypes.GET_POPULAR_TAGS_SUCCESS,
  props<{ tags: PopularTagsType }>()
);

export const getPopularTagsFailure = createAction(
  ActionTypes.GET_POPULAR_TAGS_FAILURE
);
