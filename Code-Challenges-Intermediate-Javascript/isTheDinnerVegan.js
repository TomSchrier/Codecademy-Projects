/*Write a function isTheDinnerVegan() that takes in an array 
of food objects in the format: {name: 'cabbage', source: 'plant' } 
and returns a boolean value based on whether or not every item in 
the array has entirely plant-based origins.*/

function isTheDinnerVegan(array) {

    let isVegan = (food) => {
        if (food.source === 'plant') {
            return true;
        } else {
            return false;
        };
    };

    for (let i = 0; i < array.length; i++) {
        if (!isVegan(array[i])) {
            return false
        }
    }
    return true;
};

const dinner = [
    {
        name: 'hamburger',
        source: 'meat'
    },
    {
        name: 'cheese',
        source: 'dairy'
    },
    {
        name: 'ketchup',
        source: 'plant'
    },
    {
        name: 'bun',
        source: 'plant'
    },
    {
        name: 'dessert twinkies',
        source: 'unknown'
    }
];

console.log(isTheDinnerVegan(dinner))