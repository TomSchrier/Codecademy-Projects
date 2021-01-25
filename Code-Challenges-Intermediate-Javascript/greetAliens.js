/* Write a function, greetAliens(), that takes in an array of strings and uses a 
for loop to print a greeting with each string in the array.

The greeting should take the following format:
“Oh powerful [stringElement], we humans offer our unconditional surrender!” */

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

function greetAliens(array) {
    for (let index = 0; index < array.length; index++) {
        console.log(`Oh powerful ${array[index]}, we humans offer our unconditional surrender!`);
    };
};

greetAliens(aliens);