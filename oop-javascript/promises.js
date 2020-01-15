let sleepyGreeting = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve('Hello....');
    // }, 2000);

    setTimeout(() => {
        reject(Error('Too slepy....'));
    }, 2000);
});

sleepyGreeting
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    });