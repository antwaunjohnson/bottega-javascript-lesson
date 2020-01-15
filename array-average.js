const getAverage = arr => {
    // sum the values from the array
    const reducer = (total, currentValue) => total + currentValue
    const sum = arr.reduce(reducer);
       // get the lenght of the array
    // divide the array sum by the lenght
    return sum / arr.length
}

console.log(getAverage([2,4,6,8,10,12]))

