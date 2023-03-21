function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;

}

var pizzaorder1 = pizzaOven("deep dish", "traditional", "mozzarellla", ["pepperoni", "sausage"]);
var pizzaorder2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var pizzaorder3 = pizzaOven("stuffed", "traditional", "feta", ["pepperoni", "sausage"]);
var pizzaorder4 = pizzaOven("New York", "bbq sauce", "American", ["bacon", "sausage"]);
console.log(pizzaorder1)
console.log(pizzaorder2)
console.log(pizzaorder3)
console.log(pizzaorder4)



