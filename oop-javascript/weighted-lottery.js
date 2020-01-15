// Object.keys
// bitwise operators
const weightedLottery = weights => {
    // keep track of the weights
    // ['green', 'yellow', 'yellow', 'red', 'red', 'red']
    let weightsArray = [];

    Object.keys(weights).forEach(key => {
        for (let i = 0; i < weights[key]; i++) {
            weightsArray.push(key);
        }

    });
    return weightsArray[(Math.random() * weightsArray.length) | 0];
};

const weights = {
    yellow: 33,
    red: 57,
    green: 10

};

console.log(weightedLottery(weights));

