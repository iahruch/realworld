import { routerNavigatedAction } from '@ngrx/router-store';
import { createReducer, on, Action } from '@ngrx/store';
import { ArticleStateInterface } from '../types/articleState.interface';
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccesAction,
} from './actions/getArticle.action';

export const initState: ArticleStateInterface = {
  isLoading: false,
  data: null,
  errors: null,
};
const articleReducer = createReducer(
  initState,
  on(
    getArticleAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),

  on(
    getArticleSuccesAction,
    (state, action): ArticleStateInterface => ({
      ...state,
      isLoading: false,
      data: action.article,
    })
  ),
  on(
    getArticleFailureAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigatedAction, (): ArticleStateInterface => initState)
);
export function reducers(state: ArticleStateInterface, action: Action) {
  return articleReducer(state, action);
}
