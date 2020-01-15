class Instructor {
    constructor({ name, role = 'assistant' }){
        this.name = name;
        this.role = role;
    }

    renderDetails(){
        console.log(`${this.name}: ${this.role}`);
    }

    static helloWorld(){
        console.log('Hi there');
    }

    static canTeach(instructor){
        return (instructor.role === 'classroom');
    }
}

// INSTANCE METHOD EXAMPLE USES
// const jon = new Instructor({ name: 'Jon Jordan'});
// const teddy = new Instructor({ name: 'Teddy', role: 'teacher'});
// jon.renderDetails();
// teddy.renderDetails();

let jon = new Instructor({'name': 'Jon'});
console.log(
    `${jon.name} can teach: ${Instructor.canTeach(jon)}`
);

let elroy = new Instructor({'name': 'Elroy', 'role': 'classroom'});
console.log(
    `${elroy.name} can teach: ${Instructor.canTeach(elroy)}`
);