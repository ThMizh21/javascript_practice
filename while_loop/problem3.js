// ATM withdrawal limit
// ATM Program

// Initial balance
let balance = 1000.00;

// Withdrawal limit
const withdrawalLimit = 500.00;

function displayMenu() {
    console.log("\nATM Menu:");
    console.log("1. Check Balance");
    console.log("2. Withdraw Funds");
    console.log("3. Deposit Funds");
    console.log("4. Exit");
}

function checkBalance() {
    console.log(`Your current balance is: $${balance.toFixed(2)}`);
}

function withdrawFunds() {
    while (true) {
        let amount = parseFloat(prompt("Enter the amount to withdraw: $"));
        
        if (isNaN(amount) || amount <= 0) {
            console.log("Amount must be a positive number.");
        } else if (amount > withdrawalLimit) {
            console.log(`Amount exceeds the withdrawal limit of $${withdrawalLimit.toFixed(2)}.`);
        } else if (amount > balance) {
            console.log(`Insufficient funds. Your balance is $${balance.toFixed(2)}.`);
        } else {
            balance -= amount;
            console.log(`Withdrawal successful. You withdrew $${amount.toFixed(2)}.`);
            break;
        }
    }
}

function depositFunds() {
    while (true) {
        let amount = parseFloat(prompt("Enter the amount to deposit: $"));
        
        if (isNaN(amount) || amount <= 0) {
            console.log("Amount must be a positive number.");
        } else {
            balance += amount;
            console.log(`Deposit successful. You deposited $${amount.toFixed(2)}.`);
            break;
        }
    }
}

function atmProgram() {
    while (true) {
        displayMenu();
        let choice = prompt("Select an option (1-4): ");
        
        switch (choice) {
            case '1':
                checkBalance();
                break;
            case '2':
                withdrawFunds();
                break;
            case '3':
                depositFunds();
                break;
            case '4':
                console.log("Exiting the ATM. Thank you!");
                return; // Exit the program
            default:
                console.log("Invalid option. Please select a valid option.");
                break;
        }
    }
}

// Run the ATM program
atmProgram();