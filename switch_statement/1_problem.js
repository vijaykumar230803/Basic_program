const prompt =require("prompt-sync")();

const day =parseInt(prompt("Enter Input NO:"));

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wesnesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Satursday");
        break;
    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Input");
    }
