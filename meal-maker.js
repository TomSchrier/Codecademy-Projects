//does not work

const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },

    get appetizers() {
        return this._courses.appetizers;
    },
    set appetizers(appetizer) {
        this._courses.appetizers = appetizer;
    },

    get mains() {
        return this._courses.appetizers;
    },
    set mains(main) {
        this._courses.appetizers = appetizer;
    },

    get desserts() {
        return this._courses.appetizers;
    },
    set desserts(dessert) {
        this._courses.appetizers = appetizer;
    },

    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts,
        }
    },

    addDishToCourse(courseName, dishName, dishPrice) {

        const dish = {
            courseName: courseName,
            courseName: dishName,
            dishPrice: dishPrice
        };

        this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse(courseName) {
        let dishes = this._courses[courseName];
        let randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },

    generateRandomMeal() {
        let appetizer = this.getRandomDishFromCourse('appetizers');
        let mains = this.getRandomDishFromCourse('mains');
        let desserts = this.getRandomDishFromCourse('desserts');
        console.log(mains);

        return `Your meal is ${appetizer.courseName}, and it costs ${appetizer.dishPrice}.`;
    }

};

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('mains', 'dsfsdfsdf', 5.25);
menu.addDishToCourse('desserts', '7654334567', 6.25);

let meal = menu.generateRandomMeal();
console.log(meal);
