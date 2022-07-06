import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorInterface } from 'src/app/shared/types/backedErrors.interface';

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backendErrorMessages.component.html',
  styleUrls: ['./backendErrorMessages.component.scss'],
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input() backErrors!: BackendErrorInterface;

  errorMessages!: Array<string>;

  constructor() {}

  ngOnInit() {
    console.log(this.backErrors);

    this.errorMessages = Object.keys(this.backErrors).map((name: string) => {
      let msg = this.backErrors[name].join(', ');
      console.log('msg', msg);

      return `${name} ${msg}`;
    });
  }
}
