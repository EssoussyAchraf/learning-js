'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  friday: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order(starterIndex, mainIndex) {
    return `your order is ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}`;
  },
};

const rest = new Map();
rest.set(1, 'btata').set(2, 'kfta').set(3, 'mir laft').set(4, 'poukadiyouse');
const arr = [1, 2];
rest.set(arr, 'test');
console.log(rest.get(1));
rest.set(document.querySelector('h1'), 'heading');
console.log(rest.size);
console.log(rest.get(arr));
console.log(rest);
console.log(Object.entries(openingHours));
const mapHours = new Map(Object.entries(openingHours));
console.log(mapHours);
console.log('hello world')
