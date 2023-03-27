// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

const test1 = [4, 5, 3, 9, 6, 8, 9, 8, 8, 7, 7, 0, 5, 7, 9, 8];
const test2 = "5018935274947494".split("");
const test3 = "6761128949702810".split("");;
const test4 = "6759232818189325".split("");;

const test5 = ["5204502534805781", "2720990576696048", "5585956332299929"].map( e => {
    return e.split("").map( e => Number(e));
});
console.log("test 5555 -> " , test5);

// An array of all the arrays above
// const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5, test1, test2, test3, test4, test5];

const batch = [test5];


// return true if credit card valid, otherwise false.
function validateCred(creditCard) {
    let length = creditCard.length;
    let sumDigit = 0;
    let toggle = true;
    for (let i = 0; i < length; i++) {
        let currentDigit = creditCard[length - i - 1];
        if (toggle) {
            sumDigit += currentDigit;
            toggle = false;
        } else {
            currentDigit *= 2;
            if (currentDigit > 9) {
                currentDigit -= 9;
            }
            sumDigit += currentDigit;
            toggle = true;
        }
    }
    let isValidCard = sumDigit % 10 === 0;
    if (isValidCard) return true;
    return false;
}

function findInvalidCards(creditCards) {
    const invalidCards = [];
    for (const creditCard of creditCards) {
        if (!validateCred(creditCard)) {
            invalidCards.push(creditCard);
        }
    }
    return invalidCards;
}

// to identify the invalid credit card companies that have possibly issued these faulty numbers.
function idInvalidCardCompanies(invalidCards) {
    const invalidCardsCompanies = new Map();

    for (const creditCard of invalidCards) {
        let firstCreditCardDigit = creditCard[0];
        let companyName = "";
        switch (firstCreditCardDigit) {
            case 3:
                companyName = "Amex (American Express)";
                break;
            case 4:
                companyName = "Visa";
                break;
            case 5:
                companyName = "Mastercard";
                break;
            case 6:
                companyName = "Discover";
                break;

            default:
                companyName = "Company not found";
                break;

        }
        if (!invalidCardsCompanies.has(companyName)) {
            invalidCardsCompanies.set(companyName, companyName);
        }
    }
    return invalidCardsCompanies;
}

let invalidCards = findInvalidCards(batch);
console.log(idInvalidCardCompanies(invalidCards));