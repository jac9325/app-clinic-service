import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), provideClientHydration(),
    HttpClientModule,
    provideHttpClient(withFetch()),
    provideAnimations()
  ]
};
