const removeFirstAndLast = arr => {
    if (arr.length >= 3){
        return arr.slice(1, -1);
    } else {
        throw new Error("You need at least three elements in the array")
    }
}

['a', 'c', 'b', 'e', 'd']

console.log(removeFirstAndLast(['e', 'd']
))