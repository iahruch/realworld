import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { catchError, of, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { FeedService } from '../../services/feed.service';
import { GetFeedResposeInterface } from '../../types/getFeedResponse.interface';
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccesAction,
} from '../actions/getFeed.action';

@Injectable()
export class GetFeedEffect {
  getFeed$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({ url }) => {
        return this.feedService.getFeed(url).pipe(
          map((feed: GetFeedResposeInterface) => {
            return getFeedSuccesAction({ feed });
          }),
          catchError((errorsResponse: HttpErrorResponse) => {
            return of(getFeedFailureAction());
          })
        );
      }) // end switchMap
    );
  });

  constructor(private actions$: Actions, private feedService: FeedService) {}
}
