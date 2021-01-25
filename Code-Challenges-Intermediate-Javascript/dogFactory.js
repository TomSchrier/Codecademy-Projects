/*
Write a function, dogFactory(). It should:
    --have 3 parameters: name, breed, and weight (in that order)
    --expect name and breed to be strings
    --expect weight to be a number
    --return an object
    --have each of those parameters as keys on the 
    returned object returned with the values of the arguments that were passed in
*/

const dogFactory = (name, breed, weight) => {
    return {
        _name: name,
        _breed: breed,
        _weight: weight,
        get name() {
            return this._name;
        },
        set name(newName) {
            this._name = newName;
        },
        get breed() {
            return this._breed;
        },
        set breed(newBreed) {
            this._breed = newBreed;
        },
        get weight() {
            return this._weight;
        },
        set weight(newWeight) {
            this._weight = newWeight;
        },
        bark() {
            return 'ruff! ruff!'
        },
        eatTooManyTreats() {
            this._weight++
        }
    };
};