export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(accountNumber: number, name: string) {
    this.name = name
    this.accountNumber = accountNumber
  }

  public getName = (): string => {
    return this.name
  }

  public deposit(depositValue: number): void {
    if (this.validateStatus()) {
      this.balance += depositValue
      console.log('Voce depositou %d', depositValue)
    }
  }

  public withdraw = (withdrawValue: number): void => {
    if (this.validateStatus() && this.getBalance() >= withdrawValue) {
      this.balance -= withdrawValue
      console.log('Voce sacou %d', withdrawValue)
    }
  }

  public getBalance = (): number => {
    console.log('Saldo na conta: %d ', this.balance)
    return this.balance
  }

  public inactivateAccount = (): void => {
    this.status = false
    console.log('Conta desativada!')
  }

  public activateAccount = (): void => {
    this.status = true
    console.log('Conta ativada!')
  }

  public validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    return false
  }
}
