import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(accountNumber: number, name: string,){
    super(accountNumber, name)
  }

  getLoan = (): void => {
    console.log('Voce pegou um empréstimo')
  }
}
