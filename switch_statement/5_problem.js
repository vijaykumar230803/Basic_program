const prompt = require("prompt-sync")();

const character = prompt("Enter a character: ");

if (character.length !== 1) {
  console.log("Invalid Input: ");
} else {
  if (
    character === "a" ||
    character === "e" ||
    character === "i" ||
    character === "o" ||
    character === "u"
  ) {
    console.log(character, "is a Vowel");
  } else {
    console.log(character, "is a Consonant");
  }
}