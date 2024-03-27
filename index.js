#! /usr/bin/env node
import inquirer from "inquirer";
//computer will generate a random number /done
//users input for guessing number /done
// compare user input with computer generated number and show result /done
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);
const answers = await inquirer.prompt([
    {
        name: "userGuessedrNumber",
        type: "number",
        message: "please guess a number between 1-6:",
    },
]);
if (answers.userGuessedrNumber === randomNumber) {
    console.log("congratulation! you gussed right number.");
}
else {
    console.log("you gussed wrong number.");
}
