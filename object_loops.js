var student = {
    name: 'Antwaun',
    age: 37,
    city: 'Chandler',
    school: 'Bottega'
};

for (var key in student){
    console.log(key + " => " + student[key]);
}