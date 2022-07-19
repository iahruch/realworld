import { createReducer, on, Action } from '@ngrx/store';
import { PopularTagsStateInterface } from '../types/popularTagsState.interface';
import {
  getPopularTags,
  getPopularTagsFailure,
  getPopularTagsSuccess,
} from './actions/getPopularTags';

const initState: PopularTagsStateInterface = {
  isLoading: false,
  data: null,
};

const popularTagsReducer = createReducer(
  initState,
  on(
    getPopularTags,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),

  on(
    getPopularTagsSuccess,
    (state, action): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
      data: action.tags,
    })
  ),

  on(
    getPopularTagsFailure,
    (state, action): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);

export function reducers(state: PopularTagsStateInterface, action: Action) {
  return popularTagsReducer(state, action);
}
