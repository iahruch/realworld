import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { catchError, of, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArticleService } from 'src/app/shared/services/article.service';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { GetFeedResposeInterface } from '../../types/getFeedResponse.interface';
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccesAction,
} from '../actions/getArticle.action';

@Injectable()
export class GetArticleEffect {
  getArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) => {
        return this.articleService.getArticle(slug).pipe(
          map((article: ArticleInterface) => {
            return getArticleSuccesAction({ article });
          }),
          catchError((errorsResponse: HttpErrorResponse) => {
            return of(getArticleFailureAction());
          })
        );
      }) // end switchMap
    );
  });

  constructor(
    private actions$: Actions,
    private articleService: ArticleService
  ) {}
}
