/* Module 3: Implement interfaces in TypeScript
   Lab Start  */

/*  EXERCISE 1
    TODO: Declare the Loan interface. */


/*  TODO: Declare the ConventionalLoan interface. */

interface Loan {
    principle: number;
    interestRate: number;
}

/*  TODO: Update the calculateInterestOnlyLoanPayment function. */

function calculateInterestOnlyLoanPayment({principle, interestRate}: Loan) {
    // Calculates the monthly payment of an interest only loan
    let interest = interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = principle * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}

/*  TODO: Update the calculateConventionalLoanPayment function. */

interface LoanTerm extends Loan {
    months: number;
}

function calculateConventionalLoanPayment(loanParams: LoanTerm) {
    // Calculates the monthly payment of a conventional loan
    let interest = loanParams.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = loanParams.principle * interest / (1 - (Math.pow(1 / (1 + interest), loanParams.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}

let interestOnlyPayment = calculateInterestOnlyLoanPayment({ principle: 30000, interestRate: 5 });
let conventionalPayment = calculateConventionalLoanPayment({ principle: 30000, interestRate: 5, months: 180 });

console.log(interestOnlyPayment);     //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalPayment);     //* Returns "The conventional loan payment is 237.24" 

// The interest only loan payment is 125.00
// The conventional loan payment is 237.24