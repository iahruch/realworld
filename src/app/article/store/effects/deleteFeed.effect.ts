import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { catchError, of, switchMap } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { ArticleService } from '../../services/art.service';
import {
  deleteArticleAction,
  deleteArticleFailureAction,
  deleteArticleSuccesAction,
} from '../actions/deleteArticle.action';

@Injectable()
export class DeleteArticleEffect {
  deleteArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteArticleAction),
      switchMap(({ slug }) => {
        return this.articleService.deleteArticle(slug).pipe(
          map(() => {
            return deleteArticleSuccesAction();
          }),
          catchError((errorsResponse: HttpErrorResponse) => {
            return of(deleteArticleFailureAction());
          })
        );
      }) // end switchMap
    );
  });

  redirectAfterSUccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(deleteArticleSuccesAction),
        tap(() => {
          this.router.navigate(['/']);
        })
      );
    },
    { dispatch: false }
  );
  constructor(
    private actions$: Actions,
    private articleService: ArticleService,
    private router: Router
  ) {}
}
