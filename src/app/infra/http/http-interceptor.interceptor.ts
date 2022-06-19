import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../../data/services/auth/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (this._authService.credentials) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this._authService.credentials.token}`
        }
      });
      return next.handle(request).pipe(catchError(error => this.errorHandler(error)));
    }

    return next.handle(request);
  }

  private errorHandler(response: HttpErrorResponse): Observable<HttpEvent<any>> {
    let errs: any[] = [];

    switch (response.status) {
      case 400:
        console.log('Error', response.status);
        break;
      case 401:
        this._router.navigateByUrl('/login', { replaceUrl: true });
        break;
      case 404:
        errs.push('<strong>404</strong>: O recurso requisitado não existe.');
        break;
      case 406:
      case 409:
      case 500:
        console.log('Ocorreu um erro inesperado de servidor.');
        break;
    }

    return throwError(() => new Error());
  }
}
