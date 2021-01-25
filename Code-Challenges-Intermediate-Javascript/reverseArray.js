/*
Write a function, reverseArray(), that takes in an array as an argument 
and returns a new array with the elements in the reverse order.

There’s a built-in method that does a lot of this work for you, but 
here you’re not allowed to use it
*/

function reverseArray(array) {
    let reversedArray = [];

    const arrayLength = array.length;

    //using array.length inside the loop does not work as the last two elements wont be poped.
    for (let index = 0; index < arrayLength; index++) {
        reversedArray.push(array.pop());
    };

    return reversedArray;
};

const sentence = ['sense.', 'make', 'all', 'will', 'This'];
console.log(reverseArray(sentence));