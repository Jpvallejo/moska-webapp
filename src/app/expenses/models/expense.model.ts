import { Money } from 'ts-money';

export class Expense {
  id: number;
  accountId: number;
  amount: Money;
  date: Date;
  description: string;
}
