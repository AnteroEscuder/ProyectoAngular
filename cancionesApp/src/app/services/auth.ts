import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly STORAGE_KEY = 'logueado';

  constructor() { }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.STORAGE_KEY) === 'true';
  }

  login() {
    localStorage.setItem(this.STORAGE_KEY, 'true');
  }

  logout() {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}
