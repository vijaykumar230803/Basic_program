const prompt = require("prompt-sync")();

const No = parseInt(prompt("Enter Input No:"));

function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;

    return celsius;
}

function celsiusToFahrenheit(celsius) {
    const fahrenheit = celsius * 9 / 5 + 32;

    return fahrenheit;
}

const celsius = fahrenheitToCelsius(No);

console.log(`Celsius: ${celsius}`);

const fahrenheit = celsiusToFahrenheit(No);

console.log(`Fahrenheit: ${fahrenheit}`);
