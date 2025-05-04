// Module 3 Exercise: Looping in Objects
// Start with exercise-3.md if you haven't read it!

const dominos = {
  name: "Domino's",
  cuisines: ["italian", "new york", "pizza"],
  pizzaToppings: {
    pepperoni: 2.2,
    mushrooms: 0.7,
    extraCheese: 1.4,
    onions: 0.5,
    sausage: 2.8,
    extraSauce: 0.8,
  },
  starReviews: {
    Peach: 3,
    Yoshi: 2.1,
    Bowser: 4,
    Mario: 5,
    Luigi: 5,
    Gumba564: 3.4,
    "Donkey Kong": 3.2,
  },
  favorited: true,
  address: "123 Elm Street",
  zipcode: 54321,
  acceptsReservations: true,
};

const printPizzaPlace = (pizzaPlace) => {
  for (const key in pizzaPlace) {
    console.log(key, pizzaPlace[key]);
  }
};

const toppingsPriceRange = (obj) => {
  var highest = 0;
  var lowest = Infinity;
  for (const key in obj) {
    if (obj[key] > highest) {
      highest = obj[key];
    } else if (obj[key] < lowest) {
      lowest = obj[key];
    }
  }
  return [highest, lowest];
};

const calculateAverageRating = (pizzaPlace) => {
  total = 0;
  avg = 0;
  for (const key in pizzaPlace.starReviews) {
    total += pizzaPlace.starReviews[key];
    avg += 1;
  }
  return "Avgerage is " + total / avg;
};

console.log(calculateAverageRating(dominos));
