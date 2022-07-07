import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loginAction } from '../../srote/actions/login.action';
import {
  isSubmittedSelector,
  validationErrorsSelector,
} from '../../srote/selectors';
import { LoginRequestInterface } from '../../types/loginRequest.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isSubmitted$!: Observable<boolean>;
  backendErrors$: Observable<any> | undefined;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValue();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  initializeValue(): void {
    this.isSubmitted$ = this.store.pipe(select(isSubmittedSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onSubmit() {
    const request: LoginRequestInterface = {
      user: { ...this.form.value },
    };
    this.store.dispatch(loginAction({ request }));
  }
}
