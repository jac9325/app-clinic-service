import { ApplicationConfig, PLATFORM_ID, inject } from '@angular/core';
import { provideRouter } from '@angular/router';

import { isPlatformBrowser } from '@angular/common';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { UsuarioAndRoles } from './Models/Usuario/UsuarioAndRoles';
import { routes } from './app.routes';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), provideClientHydration(),
    HttpClientModule,
    provideHttpClient(withFetch()),
    provideAnimations(),
    {
        provide: Window,
        useFactory: () => {
            const platformId = inject(PLATFORM_ID);
            return isPlatformBrowser(platformId) ? window : undefined;
        },
    },
    UsuarioAndRoles
    //{ provide: HTTP_INTERCEPTORS, useValue: authInterceptor, multi: true },
    ,
    provideStore()
]
};
