import { Injectable } from '@angular/core';
import { User } from 'src/app/domain/models/user';

const credentialsKey = 'userCredentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user?: User;

  constructor() {
    const savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);

    if(savedCredentials != null && savedCredentials.length > 0){
      this.user = JSON.parse(savedCredentials)
    }
   }

   isAuthenticated(): boolean {
    return !!this.credentials;
  }

  get credentials(): User {
    return this.user!;
  }

  set credentials(credentials: User) {
    this.user = credentials || null;

    if (credentials) {
      localStorage.setItem(credentialsKey, JSON.stringify(credentials));
    } else {
      localStorage.removeItem(credentialsKey);
    }
  }
}
