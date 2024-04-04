import { Inject, Injectable } from '@angular/core';
import { WINDOW } from '../../Helpers/window.token';

const USER_KEY = 'token-clinic-services-jpa';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(@Inject(WINDOW) private window: Window) {}

  clean(): void {
    this.window.sessionStorage.clear();
}

  public saveUser(user: any): void {
    this.window.sessionStorage.removeItem(USER_KEY);
    this.window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  

  public getUser(): any {
    const user = this.window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  public isLoggedIn(): boolean {
    const user =this.window.sessionStorage.getItem(USER_KEY);
    return !!user;
  }
}