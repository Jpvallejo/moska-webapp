import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IncomesComponent } from './incomes/incomes.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ProfileComponent } from './profile/profile.component';
import { CreditCardsComponent } from './credit-cards/credit-cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { ExpensesModule } from './expenses/expenses.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    IncomesComponent,
    AccountsComponent,
    ProfileComponent,
    CreditCardsComponent,
    DashboardComponent,
  ],
  imports: [
    LoginModule,
    SharedModule,
    ExpensesModule,
    BrowserModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
