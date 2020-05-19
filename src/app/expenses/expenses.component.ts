import { Component, OnInit } from '@angular/core';
import { ExpensesService } from './services/expenses.service';
import { Expense } from './models/expense.model';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
})
export class ExpensesComponent implements OnInit {
  public expenses: Expense[];

  constructor(public expensesService: ExpensesService) {}

  ngOnInit(): void {
    this.expensesService.getExpenses().subscribe((expenses) => {
      this.expenses = expenses.filter((x) => x);
    });
  }
}
