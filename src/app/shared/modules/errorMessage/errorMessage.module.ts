import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorMessageComponent } from './component/errorMessage.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ErrorMessageComponent],
  exports: [ErrorMessageComponent],
})
export class ErrorMessageModule {}
