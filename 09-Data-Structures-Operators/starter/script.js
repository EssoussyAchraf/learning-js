"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours,
  order(starterIndex, mainIndex) {
    return `your order is ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}`;
  },
};

const rest = new Map();
rest.set(1, "btata").set(2, "kfta").set(3, "mir laft").set(4, "poukadiyouse");
const arr = [1, 2];
rest.set(arr, "test");
console.log(rest.get(1));
rest.set(document.querySelector("h1"), "heading");
console.log(rest.size);
console.log(rest.get(arr));
console.log(rest);
console.log(Object.entries(openingHours));
const mapHours = new Map(Object.entries(openingHours));
console.log(mapHours);
