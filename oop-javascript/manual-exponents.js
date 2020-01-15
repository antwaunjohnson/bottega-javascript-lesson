const powerOf = (num, exp) => {
    const items = Array(exp).fill(num);
    const reducer = (total, currentValue) => total * currentValue;
    return items.reduce(reducer);
};

console.log(powerOf(5,5));