import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const jwtToken = getJwtToken();
  if (jwtToken) {
    req.clone({
      setHeaders:{
        Authorization: `Bearer ${jwtToken}`,

      }
    })
  }
  return next(req);
};

function getJwtToken(): string|null{
  let token= localStorage.getItem("token-clinic-services-jpa'");
  return cleanToken(token);
}
function cleanToken(val:string):string{
        return val.replace(/^"(.*)"$/, '$1');
}