"use strict";
// TODO: Завдання.Запитати у користувача кількість категорій витрат за минулий місяць, запитати які це категорії і скільки коштів на них було витрачено і записати все це у обєкт.Написати функцію яка вирахує загальну суму всіх витрат.Результат вивести повідомленням(За минулий місяць Ви витратили… грн)
// *monthly expenses
// ?solution option 1
let costs = {};
let sum = 0;
let numberOfCategories = +prompt("Ведіть кількість категорій витрат за минулий місяць :", "2");
for (let i = 1; i <= numberOfCategories; i++) {
  let nameOfCategories = prompt(`Ведіть назву ${i} категорії :`, "");
  let sumCosts = +prompt(`Ведіть скільки коштів витрачено на ${nameOfCategories} :`, "");
  costs[nameOfCategories] = sumCosts;
}
console.log(costs);

 for (let values in costs) {
   sum += costs[values];
   }
alert(`За минулий місяць Ви витратили ${sum} грн.`);

// ?solution option 2
// let costs = {};
// let sum = 0;
// let i = 1;
// let numberOfCategories = +prompt("Ведіть кількість категорій витрат за минулий місяць :", "2");
// while (i <= numberOfCategories) {
//   let nameOfCategories = prompt(`Ведіть назву ${i} категорії :`, "");
//   let sumCosts = +prompt(`Ведіть скільки коштів витрачено на ${nameOfCategories} :`, "");
//   costs[nameOfCategories] = sumCosts;
//   i++
// }
// console.log(costs);

// for (let values in costs) {
//   sum += costs[values];
// }
// alert(`За минулий місяць Ви витратили ${sum} грн.`);

// ?solution option 3
// let costs = {};
// let sum = 0;
// let i = 1;
// let numberOfCategories = +prompt("Ведіть кількість категорій витрат за минулий місяць :", "2");
// do {
//   let nameOfCategories = prompt(`Ведіть назву ${i} категорії :`, "");
//   let sumCosts = +prompt(`Ведіть скільки коштів витрачено на ${nameOfCategories} :`, "");
//   costs[nameOfCategories] = sumCosts;
//   i++
// } while (i <= numberOfCategories);
// console.log(costs);

// for (let values in costs) {
//   sum += costs[values];
// }
// alert(`За минулий місяць Ви витратили ${sum} грн.`);