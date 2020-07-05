import { Login } from './model/login.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}

  login({ email, password}): Observable<Login> {
    return this.http.post<Login>('https://reqres.in/api/login', { email, password });
  }
}
/* {
  "email": "eve.holt@reqres.in",
  "password": "cityslicka"
} */
