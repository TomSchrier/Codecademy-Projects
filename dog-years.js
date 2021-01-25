//my age in human years
let myAge = 20;

//The first two years of a dog’s life
let earlyYears = 2;

earlyYears *= 10.5;

/*Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it.*/
let laterYears = myAge - 2;

//to calculate the number of dog years accounted for by your later years.
laterYears *= 4;

let myAgeInDogYears = earlyYears + laterYears

let str = "Tom";
let myName = str.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
