import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login() {
    localStorage.setItem('isLoggedIn', 'true')
  }

  logout() {
    localStorage.setItem('isLoggedIn', '');
  }

  isAuthenticated() {
    return this.isLoggedIn();
  }

  isLoggedIn() {
    return (localStorage.getItem('isLoggedIn') === 'true')
  }
}