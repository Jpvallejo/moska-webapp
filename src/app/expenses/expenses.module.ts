import { ExpensesComponent } from './expenses.component';
import { ExpensesService } from './services/expenses.service';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CreateExpenseDialogComponent } from './dialogs/create-expense-dialog/create-expense-dialog.component';

@NgModule({
  declarations: [ExpensesComponent, CreateExpenseDialogComponent],
  entryComponents: [],
  imports: [SharedModule],
  providers: [ExpensesService],
  bootstrap: [ExpensesComponent],
})
export class ExpensesModule {}
