import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/domain/models/user';
import { AuthService } from 'src/app/infra/auth/auth.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor(
    private _router: Router,
    private _auth: AuthService
  ) { }

  ngOnInit(): void {
    if(!this.user){
      this.logout();
    }
  }

  get user(): User{
    return this._auth.credentials
  }

  logout(){
    this._auth.credentials = null!;
    this._router.navigateByUrl('/login', { replaceUrl: true });
  }

}
