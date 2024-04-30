import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {
  private doc_id: number

  constructor(accountNumber: number, name: string, doc_id: number) {
    super(accountNumber, name)
    this.doc_id = doc_id
  }
}