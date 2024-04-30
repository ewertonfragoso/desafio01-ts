import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const personAccount: PeopleAccount = new PeopleAccount(1, "Ewerton Fragoso", 123)
const companyAccount: CompanyAccount = new CompanyAccount(2, "Fragoso")

personAccount.getName()
personAccount.deposit(50)
personAccount.withdraw(25)
personAccount.withdraw(25)
personAccount.getBalance()
personAccount.inactivateAccount()
personAccount.deposit(50)
companyAccount.getBalance()
companyAccount.activateAccount()
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