// COMBINING ARRAYS

/*let shoppingCart = [345,213,786, 123];
let newItems = [45, 211, 65];

shoppingCart.push(...newItems);
console.log(shoppingCart);
 [ 345, 213, 786, 123, 45, 211,65 ]*/

//  COPY ARRAYS

/* const shoppingCart = [345,213,786, 123];
 const updatedCart = [...shoppingCart];
 updatedCart.push(5);
 console.log(shoppingCart);
 console.log(updatedCart);*/

// AS FUNCTION ARGUMENTS 

/* const orderTotals = [1,5,1,10,2,3]
 console.log(Math.max(...orderTotals));*/

//  OBJECT DECONSTRUCTION

const {starter, closer, ...relievers } = {
    starter: 'Verlander',
    closer: 'Giles',
    relief_1: 'Morton',
    relief_2: 'Gregerson'
};

console.log(starter);
console.log(closer);
console.log(relievers);
