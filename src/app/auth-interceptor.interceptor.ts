import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { authparameters } from './app-config';
import { MsalService} from '@azure/msal-angular';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private authService: MsalService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const idToken = this.getToken();
    console.log(idToken);
    if (idToken) {
        const cloned = request.clone({
            headers: request.headers.set("Authorization",
                "Bearer " + idToken)
        });
        return next.handle(cloned);
    }
    else {
        return next.handle(request);
    }
  }

  getToken() {
    return this.authService.acquireTokenSilent(authparameters).then(
      accessTokenResponse => {
        return accessTokenResponse.accessToken;
      }
    );
  }
}
