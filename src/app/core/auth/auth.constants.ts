import {environment} from '../../../environments/environment';
// import {API_CONSTANTS} from '../services/endpoints.constant';

export const AUTH_CONSTANTS = {
  AUTH_ENDPOINT: {
    TOKEN: environment.UX_API.URL + 'auth/token',
    // TOKEN_VALIDATE: API_CONSTANTS.ME.BASE + '/token/validate'
  },
  CODE: 'code',
  TOKEN_PARAM: 'access_token',
  EXPIRES_IN_PARAM: 'expires_in',
  ERROR_PARAM: 'error',
  ERROR_DESCRIPTION_PARAM: 'error_description',
  CLIENT_REQUEST_ID_PARAM: 'client-request-id'
};
