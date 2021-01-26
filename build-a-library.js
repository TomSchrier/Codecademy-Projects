class Media {
    constructor(title) {

        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    };


    get title() {
        return this._title;
    };

    get checkOut() {
        return this._isCheckedOut;
    };

    get rating() {
        return this._ratings;
    };

    set checkOut(value) {
        this._isCheckedOut = value;
    };

    toggleCheckOutStatus() {
        if (this._isCheckedOut === true) {
            this._isCheckedOut = false;
        } else {
            this._isCheckedOut = true;
        }
    };

    getAverageRating() {
        let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
        let lengthOfArray = this._ratings.length;
        let AverageRating = ratingsSum / lengthOfArray;

        return AverageRating;
    };

    addRating(rating) {
        this._ratings.push(rating);
    };
};

class Book extends Media {
    constructor(author, title, pages) {
        super(title);

        this._title = title;
        this._author = author;
        this._pages = pages;
    };

    get author() {
        return this._author;
    };

    get pages() {
        return this._pages;
    };
};

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);

        this._director = director;
        this._title = title;
        this._runTime = runTime;
    };

    get director() {
        return this._director;
    };

    get runTime() {
        return this._runTime;
    };
};

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus();

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything);

console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);

speed.toggleCheckOutStatus();

console.log(speed._isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());