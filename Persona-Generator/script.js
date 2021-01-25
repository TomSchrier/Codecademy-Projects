//Random number generator by MDN
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
};

const names = ['Alex', 'James', 'Blake', 'Kyle', 'Drew', 'Taylor', 'Kennedy', 'Jordan', 'Parker', 'Avery', 'Ryan', 'Brooklyn', 'Cameron', 'Logan', 'Charlie', 'Emerson', 'Ezra', 'Austin', 'Wyatt', 'Windsor', 'Sloane', 'Shiloh'];
const jobTitle = ['Anchor', 'Assemblyperson', 'Businessperson', 'Camera Operator', 'Construction Worker', 'Artisan', 'Crew Member', 'Door Keeper', 'Firefighter', 'Trash Collector', 'Stevedore', 'Postal Worker', 'Police Officer', 'Salesperson'];
const hobby = ['3D printing', 'Fashion design', 'Filmmaking', 'Beer tasting', 'Howling', 'Hullet journaling', 'Homebrewing', 'Fishkeeping', 'Puzzles', 'Fishing', 'Cycling', 'Car riding', 'Cycling', 'Phiosophy', 'Book collecting', 'Chess'];

//Picks out a random name, age, job title and hobby
function generatePersona() {
    let personaName = names[getRandomIntInclusive(0, names.length-1)];
    let age = getRandomIntInclusive(18, 67);
    let personajobTitle = jobTitle[getRandomIntInclusive(0, jobTitle.length-1)].toLowerCase();
    let personahobby = hobby[getRandomIntInclusive(0, hobby.length-1)].toLowerCase();

    console.log(`${personaName} is ${age} years old. Their job title is ${personajobTitle}. In their free time they enjoy ${personahobby}.`);
};

//Loop to create multiple persona at once
for (let index = 0; index < 5; index++) {
    generatePersona();
}