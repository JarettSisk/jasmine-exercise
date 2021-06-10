window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment

function setupIntialValues() {
  // Set initial values
  document.querySelector("#loan-amount").value = 100000;
  document.querySelector("#loan-years").value = 30;
  document.querySelector("#loan-rate").value = 5;
  // Calculate the monthly payment
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let totalMonths = Math.floor(parseFloat(values.years) * 12);
  let monthlyRate = (parseFloat(values.rate) / 100) / 12;
  let monthlyPayment = ((monthlyRate * parseFloat(values.amount)) / (1 - Math.pow((1 + monthlyRate), -totalMonths)));
  if (isNaN(monthlyPayment)) {
    return "Error, try again";
  }
  return monthlyPayment.toFixed(2).toString();

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPaymentEl = document.querySelector("#monthly-payment");
  monthlyPaymentEl.innerText = "$" + monthly;
}
