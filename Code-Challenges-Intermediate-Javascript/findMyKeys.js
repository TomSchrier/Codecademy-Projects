/* Write a function, findMyKeys(), that takes in an array 
of strings which may or may not contain 'keys'. If the keys 
are in the array, your function should return the index at 
which they can be found. If they’re not in the array, your 
function should return -1. */

function findMyKeys(array) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === 'keys') {
            return index;
        }
    };

    return -1;
};

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))
// Should print 4
