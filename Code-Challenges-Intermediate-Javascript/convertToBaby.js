/*
Write a function, convertToBaby(), that takes in an array as an argument 
and, using a loop, returns a new array with each string in the array prepended with 'baby '. */

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

function convertToBaby(array){
    let babyArray = [];
    
    array.forEach(animal => {
        babyArray.push(`baby ${animal}`);
    });

    return babyArray;
}

console.log(convertToBaby(animals));