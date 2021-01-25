/* Write a function sortYears() that takes in an array 
of years, and, using the built-in .sort() method, returns 
that array with the years sorted in descending order. */

function sortYears(array) {
    return array.sort(function (a, b) { return b - a });
};

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];

console.log(sortYears(years));