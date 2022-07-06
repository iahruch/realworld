import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AuthRouterModule } from './auth-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { RegisterComponent } from './componets/register/register.component';
import { reducers } from './srote/reducers';
import { AuthService } from './services/auth.service';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from './srote/effects/register.effect';
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMessages/backendErrorMessages.module';
import { PersistanceService } from '../shared/services/persistance.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AuthRouterModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrorMessagesModule,
  ],
  declarations: [RegisterComponent],
  exports: [RegisterComponent],
  providers: [AuthService, PersistanceService],
})
export class AuthModule {}
