let balance = 0;

const balanceDisplay = document.getElementById("balance");
const amountInput = document.getElementById("amount");
const message = document.getElementById("message");

document.getElementById("depositBtn").onclick = function() {
    let amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        showMessage("Enter a valid deposit amount!", "red");
        return;
    }

    balance += amount;
    updateBalance();
    showMessage(`Deposited ₹${amount}`, "green");
    amountInput.value = "";
}

document.getElementById("withdrawBtn").onclick = function() {
    let amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        showMessage("Enter a valid withdrawal amount!", "red");
        return;
    }

    if (amount > balance) {
        showMessage("Insufficient balance!", "red");
        return;
    }

    balance -= amount;
    updateBalance();
    showMessage(`Withdrew ₹${amount}`, "green");
    amountInput.value = "";
}

function updateBalance() {
    balanceDisplay.textContent = `₹${balance}`;
}

function showMessage(text, color) {
    message.textContent = text;
    message.style.color = color;
}
