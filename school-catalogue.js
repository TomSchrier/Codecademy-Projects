class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    };

    get name() {
        return this._name;
    };

    get level() {
        return this._level;
    };

    get numberOfStudents() {
        return this._numberOfStudents;
    };

    set numberOfStudents(number) {
        if (typeof numberOfStudents === 'int') {
            this._numberOfStudents = number;
        } else {
            console.log('Error: This is not a number.');
        }
    };

    quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} level.`);
    };

    static pickSubstituteTeacher(substituteTeachers) {
        let randomIndex = Math.floor(substituteTeachers.length * Math.random());
        let randomSubstituteTeacher = substituteTeachers[randomIndex];
        return randomSubstituteTeacher;
    }
}

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents);

        this._pickupPolicy = pickupPolicy;
    };

    get pickupPolicy() {
        return this._pickupPolicy;
    }
};

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'high', numberOfStudents);

        this._sportsTeams = sportsTeams;
    };

    get sportsTeams() {
        return this._sportsTeams;
    }
};

let lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

let alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeams);