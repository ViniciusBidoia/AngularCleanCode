import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private _router: Router;
  private _authService: AuthService;

  constructor(private router: Router,
              private authService: AuthService){
    this._router = router;
    this._authService = authService;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (this._authService.isAuthenticated()) {
        return true;
      }

      this._router.navigateByUrl('/login', {replaceUrl: true})
      return false;
  }

}
