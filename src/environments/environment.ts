// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  ROUTE_USE_HASH: false,

  UX_API: {
    URL: 'https://moska-api.herokuapp.com/',
    CLIENT_ID: '686d23796c3644fe8c2a1a34adb16b2c',
    CLIENT_SECRET: 'eC0490D4b3b84be2a8D20b69CFBE516a'
  },

  BASE: {
    HTML_URL: '/',
    RES_URL: '/'
  },

  OAUTH: {
    GOOGLE_APP_ID: '1020253205438-fpdqjv40iaq73d7u5nm9rth6orfmuga5.apps.googleusercontent.com',
    FACEBOOK_APP_ID: ''
  },
  JWT_SECRET_KEY: 'gmOfLtMS1/6zdF4j18+5[]@OT"IWj>xd'
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
