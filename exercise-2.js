/* 
Module Two Exercise: Object Methods
Start with exercise-2.md if you haven't read it! 
*/

//  DO NOT EDIT THE BELOW OBJECT //

const papaJohn = {
  name: "Papa John's",
  slogan: "Better Ingredients. Better Pizza. Papa John's.",
  cuisines: ["italian", "american", "pizza"],
  pizzaToppings: {
    pepperoni: 2,
    peppers: 0.6,
    extraCheese: 1.5,
    olives: 0.5,
    bacon: 3,
    extraSauce: 1,
  },
  numberOfStars: 3.5,
  favorited: false,
  address: "555 Main Street",
  zipcode: 11234,
  acceptsReservations: false,
};

// DO NOT EDIT THE ABOVE OBJECT //

// YOUR WORK GOES HERE //

const grabCategories = (obj) => {
  return Object.keys(obj);
};

const verifyValues = (obj, num) => {
  if (Object.values(obj).length === num) {
    return true;
  } else {
    return false;
  }
};

const getToppingsInfo = (obj) => {
  return Object.entries(obj.pizzaToppings);
};

papaJohn.printAd = (topping, address) => {
  return `"Welcome to Papa John's! We are located at ${(papaJohn.address =
    address)}. This week, we are having a sale on ${topping} for ${
    papaJohn.pizzaToppings[topping]
  }. Better Ingredients. Better Pizza. Papa John's."`;
};

console.log(papaJohn.printAd("peppers", "123 Down rd"));
