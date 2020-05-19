import { Component, OnInit, Input } from '@angular/core';
import { Money } from 'ts-money';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction-dialog',
  templateUrl: './transaction-dialog.component.html',
  styleUrls: ['./transaction-dialog.component.scss']
})
export class AbstractTransactionDialogComponent implements OnInit {

  @Input() public accounts;
  @Input() public title;
  public transactionForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.transactionForm = new FormGroup({
      amount: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
      description: new FormControl(null, Validators.required),
      accountId: new FormControl(null, Validators.required)
    });
  }

  public onCreate() {}
  public onCancel() {}

  get amount() {
    return this.transactionForm.get('amount');
  }
  get date() {
    return this.transactionForm.get('date');
  }
  get description() {
    return this.transactionForm.get('description');
  }
  get accountId() {
    return this.transactionForm.get('accountId');
  }
}
