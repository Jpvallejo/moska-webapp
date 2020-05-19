import { Injectable } from '@angular/core';
import { AuthCookieManager } from '../auth-cookie-manager';

@Injectable()
export class AuthInterceptorService {
  constructor(private authSharedVariables: AuthCookieManager) {}

  getSavedToken(): string {
    return this.authSharedVariables.getToken();
  }
}
