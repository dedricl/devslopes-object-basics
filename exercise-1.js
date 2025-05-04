/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //favorited

const chipotle = {
  name: "Chipotle",
  cuisines: ["tacos", "salad", "bowl", "burritos"],
  numberOfStars: 4,
  favorited: true,
};

chipotle.address = "555 Main Street";
chipotle.zipcode = 43219;
chipotle.acceptsReservations = false;
chipotle.numberOfStars = chipotle["numberOfStars"] + 1;
chipotle.favorited = !chipotle["favorited"];
chipotle.cuisines.push("pizza");

const retrieveProperty = (obj, key) => {
  if (obj[key] === undefined) {
    return "The information you requested does not exist.";
  }
  return obj[key];
};

console.log(retrieveProperty(chipotle, "cuisines"));
console.log(retrieveProperty(chipotle, "favorited"));
console.log(retrieveProperty(chipotle, "name"));
console.log(retrieveProperty(chipotle, "nickName"));
console.log(retrieveProperty(chipotle, "state`"));
