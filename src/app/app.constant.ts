import { environment } from 'src/environments/environment';

export const baseRoute = {
  SIGN_IN: 'sign-in',

  // expenses routes
  EXPENSES: 'expenses',

  // incomes routes
  INCOMES: 'incomes',

  // account routes
  ACCOUNTS: 'accounts',

  // profile routes
  PROFILE: 'my-profile',

  // credit cards routes
  CREDIT_CARDS: 'credit-cards',

  // dashboard routes
  DASHBOARD: ''
};

export const constant = {
  ROUTE : {
    EXPENSES: `${baseRoute.EXPENSES}`,
    INCOMES: `${baseRoute.INCOMES}`,
    ACCOUNTS: `${baseRoute.ACCOUNTS}`,
    PROFILE: `${baseRoute.PROFILE}`,
    CREDIT_CARDS: `${baseRoute.CREDIT_CARDS}`,
    DASHBOARD: `${baseRoute.DASHBOARD}`,
    SIGN_IN: `${baseRoute.SIGN_IN}`,
  },
  PAGE_TITLE : {
    EXPENSES: 'Expenses',
    INCOMES: 'Incomes',
    ACCOUNTS: 'Accounts',
    PROFILE: 'My Profile',
    CREDIT_CARDS: 'Credit Cards',
    DASHBOARD: 'Dashboard',
    SIGN_IN: 'Sign In'
  }
};

export const apiConstants = {
  EXPENSES: {
    CORE: environment.UX_API.URL + 'expenses',
  }
}
