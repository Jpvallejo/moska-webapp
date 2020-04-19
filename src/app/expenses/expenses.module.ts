import { ExpensesComponent } from './expenses.component';
import { ExpensesService } from './services/expenses.service';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ExpensesComponent
  ],
  entryComponents: [
  ],
  imports: [
    SharedModule
  ],
  providers: [
    ExpensesService
  ],
  bootstrap: [ExpensesComponent]
})
export class ExpensesModule {
}
