import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthCookieManager } from '../auth-cookie-manager';
import { JwtHelperService } from '@auth0/angular-jwt';
import { catchError } from 'rxjs/operators';
import { apiConstants } from 'src/app/app.constant';

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient, private authSharedVariables: AuthCookieManager) {}

  private jwtHelper = new JwtHelperService();

  getAuthorizationToken(email: string, firstName: string, lastName: string) {
    console.log(2);
    const body = {
      email,
      firstName,
      lastName,
    };
    const url = apiConstants.AUTH.CORE;
    return this.httpClient.post<any>(url, body).pipe(catchError(this.handleErrorObservable));
  }

  saveAuthorizationToken(token: string) {
    this.authSharedVariables.setToken(token);
  }

  setUser(token: string) {
    const decodedToken = this.getDecodedAccessToken(token);
    console.log(decodedToken);
    this.authSharedVariables.setUserEmail('userToken.email');
    this.authSharedVariables.setUserId('userToken.userId');
    this.authSharedVariables.setUserFirstName('userToken.firstname');
    this.authSharedVariables.setUserLastName('userToken.lastname');
  }

  isAuthenticated(): boolean {
    return !!this.authSharedVariables.getToken();
  }

  getUserEmail(): string {
    return this.authSharedVariables.getUserEmail();
  }

  getUserFirstName(): string {
    return this.authSharedVariables.getUserFirstName();
  }

  getUserLastName(): string {
    return this.authSharedVariables.getUserLastName();
  }

  getSavedToken(): string {
    return this.authSharedVariables.getToken();
  }

  private getDecodedAccessToken(accessToken: string): any {
    try {
      return this.jwtHelper.decodeToken(accessToken);
    } catch (Error) {
      return null;
    }
  }

  private handleErrorObservable(error: HttpErrorResponse) {
    const errorDto = error.error;
    errorDto.status = error.status;

    return throwError(error.error);
  }
}
