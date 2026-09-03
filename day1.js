function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(4));  // должно быть true
console.log(isEven(7));  // должно быть false

function findMax(a, b, c) {
    if ( a > b && a > c) {
        return a
    } else if (b > a && b > c) {
        return b
    } else {
        return c
    }
}


function toUpperCase(str) {
  return str.toUpperCase()
}

console.log(toUpperCase("hello"));  // должно быть HELLO
console.log(findMax(20, 5, 12));  // должно быть 20
console.log(findMax(5, 20, 12));  // должно быть 20
console.log(findMax(12, 20, 5));  // должно быть 20