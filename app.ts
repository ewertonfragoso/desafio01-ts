import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SavingsAccount } from './class/SavingsAccount'

const personAccount: PeopleAccount = new PeopleAccount(1, "Ewerton Fragoso", 123)
const companyAccount: CompanyAccount = new CompanyAccount(2, "Fragoso")
const savingsAccount: SavingsAccount = new SavingsAccount(3, "Poupança")

personAccount.getName()
personAccount.deposit(50)
personAccount.withdraw(25)
personAccount.withdraw(25)
personAccount.getBalance()
personAccount.inactivateAccount()
personAccount.deposit(50)
personAccount.getBalance()
personAccount.activateAccount()
personAccount.deposit(50)

companyAccount.getName()
companyAccount.deposit(200)
companyAccount.withdraw(500)
companyAccount.getLoan(600)
companyAccount.withdraw(500)
companyAccount.getBalance()
companyAccount.inactivateAccount()
companyAccount.getLoan(600)
companyAccount.activateAccount()
companyAccount.getLoan(600)
companyAccount.getBalance()

savingsAccount.getName()
savingsAccount.deposit(50)
savingsAccount.withdraw(25)
savingsAccount.withdraw(25)
savingsAccount.getBalance()