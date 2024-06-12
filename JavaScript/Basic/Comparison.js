let test

// ? = 
test = typeof(test) !== 'undefined' ? test : `Recult`
console.log(test);


const a = 10, b = 20

// > : a가 b보다 크다.
// < : a가 b보다 작다.
console.log(a > b)
console.log(a < b)

// >= : a가 b보다 크거나 같다.
// <= : a가 b보다 작거나 같다.
console.log(a >= b)
console.log(a <= b)

// == anb === : a와 b가 같다.
console.log(a == b)
console.log(a === b)

// ! and != : a가 b와 다르면 참이다 = NOT
console.log(a != b)
console.log(! a)

// && : a와 b가 모두 참일때 참이다. = AND
console.log(a && b)

// || : a와 b중 하나만 참이면 참이다. = OR
console.log(a || b)
console.log(a | b)
console.log(a ?? b);

let c = 5;
c |= 3;
console.log(c);