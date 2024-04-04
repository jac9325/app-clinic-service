import { InjectionToken } from '@angular/core';

function _window(): Window {
  return window;
}

export const WINDOW = new InjectionToken<Window>('window', {
  factory: _window,
  providedIn: 'root'
});