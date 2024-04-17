import { ApplicationConfig, PLATFORM_ID, inject } from '@angular/core';
import { provideRouter } from '@angular/router';

import { isPlatformBrowser } from '@angular/common';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { UsuarioAndRoles } from './Models/Usuario/UsuarioAndRoles';
import { citasMedicasInitialReducer } from './States/Cita/cita.reducer';
import { loginReducer } from './States/Login/login.reducer';
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
    provideStore(
        {
            'loginMedico': loginReducer,
            'loadCitaMedicaInitial': citasMedicasInitialReducer
    }),
    provideStoreDevtools({
        maxAge: 25, 
        autoPause: true, // Pauses recording actions and state changes when the extension window is not open
        trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
        traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      }),
    //provideState({name: 'loginMedico', reducer: loginReducer})
]
};
