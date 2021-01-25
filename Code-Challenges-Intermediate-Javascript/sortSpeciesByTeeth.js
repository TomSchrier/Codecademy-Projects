/* Write a function sortSpeciesByTeeth() that takes in an array 
of species objects in the format: {speciesName: 'shark', numTeeth: 50 } 
and sorts the array in ascending order based on the average number of 
teeth that species possesses (numTeeth).*/

const speciesArray = [
    {
        speciesName: 'shark',
        numTeeth: 50
    },
    {
        speciesName: 'dog',
        numTeeth: 42
    },
    {
        speciesName: 'alligator',
        numTeeth: 80
    },
    {
        speciesName: 'human',
        numTeeth: 32
    }
];

function sortTeeth(a, b) {
    return a.numTeeth - b.numTeeth;
};

function sortSpeciesByTeeth(array) {
    return array.sort(sortTeeth)
};

console.log(sortSpeciesByTeeth(speciesArray));