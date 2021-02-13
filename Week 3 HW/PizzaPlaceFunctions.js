//1.
const pizzaToppings = ["pepperoni", "sausage", "onions", "pineapple"];

//2.
function greetCustomer(){
    let greeting = `Welcome to Lucky's Pizza, our toppings are `
for (let toppings of pizzaToppings) {
    greeting += `${toppings}, `;
}
    console.log(greeting);
};
//greetCustomer();

//3.
function getPizzaOrder(pizzaSize, pizzaCrust, pizzaToppings){
    console.log(`One ${pizzaSize} ${pizzaCrust} crust pizza with ${pizzaToppings} coming up!`);
    return [pizzaSize, pizzaCrust, pizzaToppings];
};
//console.log(getPizzaOrder("large", "thick", pizzaToppings));

//4.
function preparePizza([pizzaSize, pizzaCrust, pizzaToppings]){
    console.log("...Cooking pizza...");

    return {size: pizzaSize, crust: pizzaCrust, toppings: pizzaToppings};
};
//console.log(preparePizza(["large", "thick", pizzaToppings]));

//5.
function servePizza({size: pizzaSize, crust: pizzaCrust, toppings: pizzaToppings}){
    console.log(`Order up! Here's your ${pizzaSize} ${pizzaCrust} crust pizza with ${pizzaToppings}. Enjoy!`);
    return {size: pizzaSize, crust: pizzaCrust, toppings: pizzaToppings};
};
//console.log(servePizza({size: "small", crust: "thick", toppings: pizzaToppings}))

//6.
greetCustomer();
getPizzaOrder("large", "thick", pizzaToppings);
preparePizza(getPizzaOrder("large", "thick", pizzaToppings));
servePizza(preparePizza(["large", "thick", pizzaToppings]));
