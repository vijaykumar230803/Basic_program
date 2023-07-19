const prompt = require("prompt-sync")();

const month = parseInt(prompt("Enter the month: "));
const year = parseInt(prompt("Enter the year: "));

let daysInMonth;

switch (month) {
    case 1:
        console.log("January");
        daysInMonth = 31;
        break;
    case 2:
        console.log("February");
        if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
            daysInMonth = 29;
        } else {
            daysInMonth = 28;
        }
        break;
    case 3:
        console.log("March");
        daysInMonth = 31;
        break;
    case 4:
        console.log("April");
        daysInMonth = 30;
        break;
    case 5:
        console.log("May");
        daysInMonth = 31;
        break;
    case 6:
        console.log("June");
        daysInMonth = 30;
        break;
    case 7:
        console.log("July");
        daysInMonth = 31;
        break;
    case 8:
        console.log("August");
        daysInMonth = 31;
        break;
    case 9:
        console.log("September");
        daysInMonth = 30;
        break;
    case 10:
        console.log("October");
        daysInMonth = 31;
        break;
    case 11:
        console.log("November");
        daysInMonth = 30;
        break;
    case 12:
        console.log("December");
        daysInMonth = 31;
        break;
    default:
        console.log("Invalid month");
        break;
}

console.log( daysInMonth ,'days in',year);