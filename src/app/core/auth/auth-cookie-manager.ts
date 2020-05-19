import { AuthSharedVariables } from './auth-shared-variables';
import { CookieService } from 'ngx-cookie-service';
import { Inject, InjectionToken, Injectable } from '@angular/core';

export const COOKIE_PATH: InjectionToken<string> = new InjectionToken<string>('COOKIE_PATH');

export interface CookieVisitor {
  isValidToDelete(cookieKey: string): boolean;
}

@Injectable()
export class AuthCookieManager extends AuthSharedVariables {
  // Setting Default Expiration Time = 1 week
  private readonly DEFAULT_EXPIRATION_TIME = 60 * 60 * 24 * 7;

  constructor(
    @Inject(CookieService) private cookieService: CookieService,
    @Inject(COOKIE_PATH) private cookiePath: string
  ) {
    super();
  }

  protected setVariable(key: string, value: string, expirationTime: number = this.DEFAULT_EXPIRATION_TIME): void {
    const time = Date.now() + expirationTime * 1000;
    const expireDate = new Date();
    expireDate.setTime(time);
    this.cookieService.set(key, value, expireDate, this.cookiePath, null, true);
  }

  protected getVariable(key: string): string {
    return this.cookieService.get(key);
  }

  cleanAllVariables(conditions?: CookieVisitor[]): void {
    if (conditions) {
      const cookies = this.cookieService.getAll();
      Object.keys(cookies).forEach((cookieKey) => {
        if (conditions.every((condition) => condition.isValidToDelete(cookieKey))) {
          this.cleanVariable(cookieKey);
        }
      });
    } else {
      this.cookieService.deleteAll(this.cookiePath);
    }
  }

  cleanVariable(key: string): void {
    this.cookieService.delete(key, this.cookiePath);
  }
}
