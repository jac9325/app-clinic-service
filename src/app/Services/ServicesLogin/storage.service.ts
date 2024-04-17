import { Inject, Injectable } from '@angular/core';
import { WINDOW } from '../../Login/Helpers/window.token';

const USER_KEY = 'TOKEN_CLINIC_SERVICE_JPA';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(@Inject(WINDOW) private window: Window) {}

  clean(): void {
    this.window.localStorage.clear();
}

  public saveUser(user: any): void {
    this.window.localStorage.removeItem(USER_KEY);
    this.window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  

  public getUser(): any {
    const user = this.window.localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  public isLoggedIn(): boolean {
    const user =this.window.localStorage.getItem(USER_KEY);
    return !!user;
  }
}