import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

var apiUrlAuth: string = `${environment.urlApi.urlBase}${environment.urlApi.urlAuth.base}`

@Injectable({
  providedIn: 'root'
})
export class AuthenticationsService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  GetAnonymous() : Observable<string>{
    return this._httpClient.get<string>(`${apiUrlAuth}${environment.urlApi.urlAuth.anonymous}`);
  }

  GetAuthenticated() : Observable<string>{
    return this._httpClient.get<string>(`${apiUrlAuth}${environment.urlApi.urlAuth.authenticated}`);
  }

  GetEmployee() : Observable<string>{
    return this._httpClient.get<string>(`${apiUrlAuth}${environment.urlApi.urlAuth.employee}`);
  }

  GetManager() : Observable<string>{
    return this._httpClient.get<string>(`${apiUrlAuth}${environment.urlApi.urlAuth.manager}`);
  }
}
