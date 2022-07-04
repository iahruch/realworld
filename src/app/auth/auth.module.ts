import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRouterModule } from './auth-routing.module';

import { RegisterComponent } from './componets/register/register.component';

@NgModule({
  imports: [CommonModule, AuthRouterModule, ReactiveFormsModule],
  declarations: [RegisterComponent],
  exports: [RegisterComponent],
})
export class AuthModule {}
