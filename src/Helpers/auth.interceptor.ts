import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
    const token =  sessionStorage.getItem('token-clinic-services-jpa');
    if (token) {
      // req = req.clone({
      //   setHeaders: {
      //     Authorization: `Bearer ${token}`
      //   }
      // });
    }else{
      this.router.navigate(['/login']);
    }
    
    return next.handle(req).pipe(
      catchError((error)=>{
        if (error.status === 401) {
          this.handleTokenError();
          this.router.navigate(['/login']);
        }
        return throwError(() => error);
      })
    );
  }
  private handleTokenError() {   
    sessionStorage.removeItem('token-clinic-services-jpa'); 
  }
}
