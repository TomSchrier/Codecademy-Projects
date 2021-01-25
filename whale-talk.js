let input = 'Hello World, my name is Tom uh ';

const vowles = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
    //console.log(input[index]);

    if (input[i] === 'e') {
        resultArray.push(input[i])
    }

    if (input[i] === 'u') {
        resultArray.push(input[i])
    }

    for (let j = 0; j < vowles.length; j++) {
        if (input[i] === vowles[j]) {
            resultArray.push(input[i])
        }
    }
}
console.log(resultArray.join('').toUpperCase());