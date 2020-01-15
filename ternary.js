// function ageVerification(age){
//     // if (age > 25){
//     //     console.log('can rent a car');
//     // } else {
//     //     console.log('is not old enough yet');
//     // }

//     let answer = age > 25 ? 'can rent a car' : "can't rent a car";
//     console.log(answer)
// }

// ageVerification(17)

function adminControls(user){
    // if(user){
    //     if (user.admin){
    //         console.log('showing admin controls')
    //     } else {
    //         console.log('you need to be an admin')
    //     } 
    // } else {
    //     console.log('you need to be logged in')
    // }
    return user
    ? user.admin ? "showing admin controls" : "You need to be an admin"
    : "you need to be logged in";
}

let userOne = {
    name: 'Brittany',
    admin: true
}
let userTwo = {
    name: 'Bridget',
    admin: false
}
const userThree = null;

console.log(adminControls(userThree))