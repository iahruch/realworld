import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { catchError, of, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { PopularTagType } from 'src/app/shared/types/popularTagType';
import { PopularTagsService } from '../../services/getPopularTags.service';
import {
  getPopularTags,
  getPopularTagsFailure,
  getPopularTagsSuccess,
} from '../actions/getPopularTags';

@Injectable()
export class PopularTagsEffect {
  popularTags$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getPopularTags),
      switchMap(() => {
        return this.popularTagsService.getPopularTags().pipe(
          map((tags: PopularTagType) => {
            return getPopularTagsSuccess({ tags });
          }),
          catchError((errorsResponse: HttpErrorResponse) => {
            return of(getPopularTagsFailure());
          })
        );
      }) // end switchMap
    );
  });

  constructor(
    private actions$: Actions,
    private popularTagsService: PopularTagsService
  ) {}
}
