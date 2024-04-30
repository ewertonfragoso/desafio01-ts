import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(accountNumber: number, name: string) {
    super(accountNumber, name)
  }

  public getLoan = (loanValue: number): void => {
    if (this.validateStatus()) {
      console.log('Voce pegou um empréstimo de %d', loanValue)
      this.deposit(loanValue)
    }
  }
}
