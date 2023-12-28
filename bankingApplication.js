/*
17. Build a banking application
A banking application needs to manage customer accounts and transactions. The user detail is stored in an
object with keys name and balance. Write functions using object methods to update a customer's account
balance based on a deposit or withdrawal.
*/
const bank = {
  customers: [
    {
      name: "Devashish",
      balance: 20000,
    },
    {
      name: "Anuj",
      balance: 4000,
    },
  ],
  // Function to display Account Details
  displayAccountDetails: function (customerName) {
    const customer = this.findCustomer(customerName);
    if (customer) {
      console.log(`${customer.name} Account_balance: $${customer.balance}`);
    } else {
      console.log("Customer Not Found");
    }
  },
  // Function to find a customer
  findCustomer: function (customerName) {
    return this.customers.find((customer) => customer.name === customerName);
  },
  // Function to deposit money in the customer's bank account
  deposit: function (customerName, amount) {
    const customer = this.findCustomer(customerName);
    if (customer) {
      customer.balance += amount;
      console.log(
        `Successfully deposited $${amount} into ${customer.name}'s bank Account`
      );
      this.displayAccountDetails(customerName);
    } else {
      console.log("Customer not found");
    }
  },
  // Function to withdraw money from the customer's bank account
  withdraw: function (customerName, amount) {
    const customer = this.findCustomer(customerName);
    if (customer) {
      if (customer.balance >= amount) {
        customer.balance -= amount;
        console.log(
          `Withdrawal Amount: $${amount} Available_balance: $${customer.balance}`
        );
        this.displayAccountDetails(customerName); // Fix: Pass customerName instead of customer
      } else {
        console.log("Insufficient funds for withdrawal");
      }
    } else {
      console.log("Customer not found");
    }
  },
};

bank.displayAccountDetails("Devashish");
// Deposit
bank.deposit("Anuj", 500);
// Withdrawal
bank.withdraw("Anuj", 2000);
