import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/domain/models/login';
import { AuthService } from 'src/app/data/services/auth/auth.service';
import { LoginResponse } from 'src/app/domain/interfaces/services/login-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  isLoading!: boolean;
  form!: FormGroup;

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _serviceAuth: AuthService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.form = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this._serviceAuth
      .login(new Login(this.form.value.username, this.form.value.password))
      .subscribe((data: LoginResponse) => {
        (this._serviceAuth.credentials = data),
        (this._serviceAuth.credentials.token = data.token);
      });

      this._router.navigateByUrl('/home', { replaceUrl: true });
  }
}
