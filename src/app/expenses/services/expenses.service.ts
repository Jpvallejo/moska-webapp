import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { apiConstants } from 'src/app/app.constant';
import { Expense } from '../models/expense.model';

@Injectable()
export class ExpensesService {
  constructor(public httpClient: HttpClient) {}

  public getExpenses(): Observable<Expense[]> {
    const url = apiConstants.EXPENSES.CORE;
    return this.httpClient.get<Expense[]>(url).pipe(catchError(this.handleErrorObservable));
  }

  public addExpense(expense: Expense) {
    const url = apiConstants.EXPENSES.CORE;
    return this.httpClient.post(url, expense).pipe(catchError(this.handleErrorObservable));
  }

  private handleErrorObservable(error: HttpErrorResponse) {
    const errorDto = error.error;
    errorDto.status = error.status;

    return throwError(error.error);
  }
}
