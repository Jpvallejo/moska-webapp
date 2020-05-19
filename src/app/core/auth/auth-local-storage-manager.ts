import { AuthSharedVariables } from './auth-shared-variables';

export class AuthLocalStorageManager extends AuthSharedVariables {
  protected setVariable(key: string, value: string, expirationTime?: number): void {
    localStorage.setItem(key, value);
  }

  protected getVariable(key: string): string {
    return localStorage.getItem(key);
  }

  cleanAllVariables(): void {
    localStorage.clear();
  }

  cleanVariable(key: string): void {
    localStorage.removeItem(key);
  }
}
