import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { BackendErrorInterface } from 'src/app/shared/types/backedErrors.interface';
import { registerAction } from '../../srote/actions/register.action';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import {
  isSubmittedSelector,
  validationErrorsSelector,
} from './../../srote/selectors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  isSubmitted$!: Observable<boolean>;
  backendErrors$: Observable<any> | undefined;

  constructor(private fb: FormBuilder, public store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValue();
  }

  initializeValue(): void {
    this.isSubmitted$ = this.store.pipe(select(isSubmittedSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: '',
      password: '',
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
    const request: RegisterRequestInterface = {
      user: this.form.value,
    };
    this.store.dispatch(registerAction({ request }));
  }
}
