let pizzaPlace = "Lucky's Pizza Place";
let numberOfToppings = 13;

console.log(pizzaPlace);
console.log(numberOfToppings);
console.log(typeof pizzaPlace);
console.log(typeof numberOfToppings);

console.log(`"${pizzaPlace} is the home of ${numberOfToppings} lucky pizza toppings!"`);

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.")
}

for (let i = 1; i<= numberOfToppings; i++) {
  if (i % 2 == 0) {
  console.log(i);
  }
}
