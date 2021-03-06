import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { catchError, of, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';

import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { AuthService } from '../../services/auth.service';
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from '../actions/getCurrentUser.action';

@Injectable()
export class GetCurrentUserEffect {
  currentUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.persistanceService.get('accessToken');
        if (!token) {
          return of(getCurrentUserFailureAction());
        }
        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return getCurrentUserSuccessAction({ currentUser });
          }),
          catchError((errorsResponse: HttpErrorResponse) => {
            return of(getCurrentUserFailureAction());
          })
        );
      }) // end switchMap
    );
  });

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService
  ) {}
}
