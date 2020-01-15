// Function Decloration
/*function greeting(){
    return "Hi there!";
}*/

//Function Expression
/*var greetingTwo = function(){
    return "Hi there ageain";
};*/


// console.log(greeting());
// console.log(greetingTwo());

/*var age = 3

if (age <= 10){
    var buildMenu = function(){
        return "Kid's menu";
    };

    function BuildMenuTwo(){
        return "Another kids menu"
    }

    console.log(buildMenu())
    console.log(BuildMenuTwo())
}*/

// Function Arguments/Parameters

// function fullName(firstName, lastName){
//     return " Hi there " + firstName + " " + lastName+"!"
// }

// console.log(fullName('Brittany', 'Johnson'))

function fullName(firstName, lastName, language){
    var language = language || 'English'
    return " Hi there " + firstName + " " + lastName+"!" + " You speak excellent " + language
}

console.log(fullName('Antwaun', 'Johnson', 'Italian'))