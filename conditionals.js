
// if else statements
//  var age = 30;


// if (age <= 10) {
//     console.log('You can eat from the kinds menu')
// } else {
//     console.log('Please order from the regular menu')
// }

// Compound Conditionals
// if else if

// if (age <= 10) {
//     console.log('You can eat from the kinds menu')
//     console.log('You are not old enough to drive')
//     console.log('You care not old enough to rent a car')
// } else if (age > 16 && age < 25) {
//     console.log('You can not eat from the kinds menu')
//     console.log('You are old enough to drive')
//     console.log('You are not old enough to rent a car')
// } else if ( age >= 25){
//     console.log('You can not eat from the kinds menu')
//     console.log('You are old enough to drive')
//     console.log('You are old enough to rent a car')
// }

// case statements
var dataPoint = {};

switch(typeof dataPoint) {
    case "string":
        console.log('It is a string!');
        break;
    case "number":
        console.log('It is a number!');
        break;
    case "boolean":
        console.log('It is either true or false');
        break;
    default:
        console.log('No matches')
    
}
