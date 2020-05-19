import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { constant } from './app.constant';
import { ExpensesComponent } from './expenses/expenses.component';
import { IncomesComponent } from './incomes/incomes.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ProfileComponent } from './profile/profile.component';
import { CreditCardsComponent } from './credit-cards/credit-cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: constant.ROUTE.EXPENSES,
    component: ExpensesComponent,
    data: { title: constant.PAGE_TITLE.EXPENSES },
  },
  {
    path: constant.ROUTE.INCOMES,
    component: IncomesComponent,
    data: { title: constant.PAGE_TITLE.INCOMES },
  },
  {
    path: constant.ROUTE.ACCOUNTS,
    component: AccountsComponent,
    data: { title: constant.PAGE_TITLE.ACCOUNTS },
  },
  {
    path: constant.ROUTE.PROFILE,
    component: ProfileComponent,
    data: { title: constant.PAGE_TITLE.PROFILE },
  },
  {
    path: constant.ROUTE.CREDIT_CARDS,
    component: CreditCardsComponent,
    data: { title: constant.PAGE_TITLE.CREDIT_CARDS },
  },
  {
    path: constant.ROUTE.DASHBOARD,
    component: DashboardComponent,
    data: { title: constant.PAGE_TITLE.DASHBOARD },
  },
  {
    path: constant.ROUTE.SIGN_IN,
    component: LoginComponent,
    data: { title: constant.PAGE_TITLE.SIGN_IN },
  },
  // {
  //   path: constant.ROUTE.ERROR.NOT_FOUND,
  //   component: NotFoundErrorComponent,
  //   data: { title: constant.PAGE_TITLE.NOT_FOUND_ERROR }
  // },
] as Routes;

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.ROUTE_USE_HASH,
      enableTracing: false, // putting it on 'true' if you want to see all the event routes
    }),
  ],
  exports: [RouterModule],
})
class AppRoutingModule {}

export { routes, AppRoutingModule };
