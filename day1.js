const name = "Dmitrii";
let age = 20;

function greet(name) {
  return `Привет, ${name}!`;
}

console.log(greet(name));
console.log(age >= 18 ? "Взрослый" : "Ребёнок");