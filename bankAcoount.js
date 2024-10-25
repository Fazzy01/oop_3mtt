class BankAccount {
     #balance; // Private property
    constructor(initialBalance) {
        this.#balance =initialBalance;
    }
    getBalance() {
        return this.#balance;
    }
    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        if (this.#balance >= amount) {
            this.#balance -= amount; }
        else {
            console.log("Insufficient balance");
        }
    }

}

const fawazAccont = new BankAccount(50000);
fawazAccont.deposit(1000)
fawazAccont.withdraw(50000)
const res = fawazAccont.getBalance()
console.log(res)
// class Bank extends BankAccount {
//     constructor(parameters) {
//         super(1000)
//         console.log(this.balance)
//     }

//     callBank() {
//         console.log(" my balance is: ",this.balance)
//     }

// }
// const uba = new Bank();
// console.log(uba)
