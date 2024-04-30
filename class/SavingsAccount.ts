import { DioAccount } from "./DioAccount"

export class SavingsAccount extends DioAccount {

  constructor(accountNumber: number, name: string) {
    super(accountNumber, name)
  }

  deposit = (depositValue: number): void => {
    super.deposit(depositValue+10);
  }
  
}