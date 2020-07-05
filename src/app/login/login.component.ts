import { login } from './login.actions';
import { LoginService } from './login.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { noop } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private loginService: LoginService, private store: Store<AppState>) {}
  onSubmit(): void {
    const { email, password } = this.loginForm.value;
    this.loginService.login({email, password})
    .pipe(
      tap(user => this.store.dispatch(login({user})))
    )
    .subscribe(noop, (error) => console.error(error));
  }
}
