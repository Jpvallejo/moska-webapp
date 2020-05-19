import {constant} from '../../app.constant';

export abstract class AuthSharedVariables {

  protected abstract setVariable(key: string, value: string, expirationTime?: number): void;

  protected abstract getVariable(key: string): string;

  abstract cleanAllVariables(): void;

  abstract cleanVariable(key: string): void;

  cleanAmVariables() {
    this.cleanVariable(constant.COOKIE.ACCESS_TOKEN);
    this.cleanVariable(constant.COOKIE.REFRESH_TOKEN);
    this.cleanVariable(constant.COOKIE.USER_EMAIL);
    this.cleanVariable(constant.COOKIE.USER_ID);
    this.cleanVariable(constant.COOKIE.USER_FIRST_NAME);
    this.cleanVariable(constant.COOKIE.USER_LAST_NAME);
  }

  getToken() {
    return this.getVariable(constant.COOKIE.ACCESS_TOKEN);
  }

  getRefreshToken() {
    return this.getVariable(constant.COOKIE.REFRESH_TOKEN);
  }

  setToken(token: string) {
    this.setVariable(constant.COOKIE.ACCESS_TOKEN, token);
  }

  setRefreshToken(token: string, expirationTime?: number) {
    this.setVariable(constant.COOKIE.REFRESH_TOKEN, token, expirationTime);
  }

  getUserEmail() {
    return this.getVariable(constant.COOKIE.USER_EMAIL);
  }

  setUserEmail(email: string) {
    this.setVariable(constant.COOKIE.USER_EMAIL, email);
  }

  getUserId() {
    return this.getVariable(constant.COOKIE.USER_ID);
  }

  setUserId(id: string) {
    this.setVariable(constant.COOKIE.USER_ID, id);
  }

  setUserFirstName(firstName: string) {
    this.setVariable(constant.COOKIE.USER_FIRST_NAME, firstName);
  }

  getUserFirstName() {
    return this.getVariable(constant.COOKIE.USER_FIRST_NAME);
  }

  setUserLastName(lastName: string) {
    this.setVariable(constant.COOKIE.USER_LAST_NAME, lastName);
  }

  getUserLastName() {
    return this.getVariable(constant.COOKIE.USER_LAST_NAME);
  }
}
