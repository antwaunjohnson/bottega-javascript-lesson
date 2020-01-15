const userOne = {
    firstName: "Chloe",
    lastName: "Johnson"
};

const userTwo = {
    firstName: "Carlean",
    lastName: "Johnson"
};

const userThree = {
    firstName: "Charli",
    lastName: "Johnson"
};

const fullName = function() {
    return`${this.lastName}, ${this.firstName}`;
};

const chloe = fullName.bind(userOne);
const carlean = fullName.bind(userTwo);
const charli = fullName.bind(userThree);

console.log(chloe());
console.log(carlean());
console.log(charli());
