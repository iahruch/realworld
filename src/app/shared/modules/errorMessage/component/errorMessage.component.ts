import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  template: '<div>{{errorMessageProps}} </div>',
})
export class ErrorMessageComponent {
  @Input('errorMessage') errorMessageProps: string = 'Something wrong!!';
}
