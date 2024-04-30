export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(accountNumber: number, name: string) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (depositValue: number): void => {
    if (this.validateStatus()) {
      this.balance += depositValue
      console.log('Voce depositou %d', depositValue)
    }
  }

  withdraw = (withdrawValue: number): void => {
    if (this.validateStatus() && this.getBalance() >= withdrawValue) {
      this.balance -= withdrawValue
      console.log('Voce sacou %d', withdrawValue)
    }
  }

  getBalance = (): number => {
    return this.balance
  }

  inactivateAccount = (): void => {
    this.status = false
    console.log('Conta desativada!')
  }
  
  activateAccount = (): void => {
    this.status = true
    console.log('Conta ativada!')
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
