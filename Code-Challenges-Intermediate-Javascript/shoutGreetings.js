/* Write a function shoutGreetings() that takes in 
an array of strings and returns a new array. 
This new array should contain all the strings from the 
argument array but with capitalized letters and an 
exclamation point appended to the end: 'heya' will become 'HEYA!'*/

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

function shoutGreetings(array) {
    let newArray = [];

    array.forEach(greeting => {
        let convertedGreeting = greeting.toUpperCase().concat('!');
        newArray.push(convertedGreeting);
    });

    return newArray;
};

console.log(shoutGreetings(greetings))