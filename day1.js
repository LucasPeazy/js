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


const numbers = [5, 12, 8, 20, 3];

function multBy2(numbers) {
    return numbers.map(val=> val*2)
}

console.log(multBy2(numbers))

function filterAbove10(numbers) {
  return numbers.filter(val => val > 10)
}
console.log(filterAbove10(numbers));  // должно быть [12, 20]

function sumAll(numbers) {
  return numbers.reduce((acc, val) => acc + val, 0)
}

console.log(sumAll(numbers));  // должно быть 48 (5+12+8+20+3)