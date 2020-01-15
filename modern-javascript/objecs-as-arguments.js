const user = {
    name: 'Brittany',
    email: 'Brittany@email.com'
}

const renderUser = ({ name, email }) => {
    console.log(`${name}: ${email}`);
}

renderUser(user);