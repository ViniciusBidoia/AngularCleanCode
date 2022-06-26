import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from 'src/app/domain/interfaces/services/login-response';
import { Login } from 'src/app/domain/models/login';
import { User } from 'src/app/domain/models/user';
import { environment } from "../../../environments/environment";

var apiUrlAuth: string = `${environment.urlApi.urlBase}${environment.urlApi.urlAuth}`

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userLogin?: LoginResponse;

  constructor(
    private _httpClient: HttpClient
  ) {
    const savedCredentials = sessionStorage.getItem(environment.credentialsKey) || localStorage.getItem(environment.credentialsKey);

    if(savedCredentials != null && savedCredentials.length > 0){
      this._userLogin = JSON.parse(savedCredentials)
    }
   }

   isAuthenticated(): boolean {
    return !!this.credentials;
  }

  get credentials(): LoginResponse {
    return this._userLogin!;
  }

  set credentials(credentials: LoginResponse) {
    this._userLogin = credentials || null;

    if (credentials) {
      localStorage.setItem(environment.credentialsKey, JSON.stringify(credentials));
    } else {
      localStorage.removeItem(environment.credentialsKey);
    }
  }

  login(login: Login): Observable<LoginResponse> {
    return this._httpClient.post<LoginResponse>(apiUrlAuth, login);
  }
}
