const prettyPrice = (price, extension) => {
    if (Number.isInteger(extension)){
        extension = extension * 0.01;
    }
    return Math.floor(price) + extension;
};

console.log(prettyPrice(3.42, 55));