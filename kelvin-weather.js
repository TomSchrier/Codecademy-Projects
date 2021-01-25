//temperature in Kelvin
const kelvin = 0;

//kelvin to celcius converter
const celsius = kelvin - 273;

//celcius to fahrenheit converter
let fahrenheit = Math.floor((celsius * (9 / 5) + 32));

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = Math.floor((celsius * (33 / 100)));

console.log(`The temperature is ${newton} in Newton scale.`);
