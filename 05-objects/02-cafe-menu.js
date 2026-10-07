// =============================================
// 5. OBJECTS — Cafe menu
// =============================================
// 1. Print only the items where category is "drink".
// 2. Find and print the cheapest item on the menu.
//
// Expected output:
//   Drinks:
//   - Karak: 150 baisa
//   - Fresh juice: 800 baisa
//   Cheapest: Karak (150 baisa)

const menu = [
  { name: "Shawarma", price: 600, category: "food" },
  { name: "Karak", price: 150, category: "drink" },
  { name: "Mandi", price: 2500, category: "food" },
  { name: "Fresh juice", price: 800, category: "drink" },
  { name: "Luqaimat", price: 1000, category: "dessert" },
];

// your code here
const drinks = menu.filter(item => item.category === "drink");
console.log("Drinks:");
drinks.forEach(drink => {
  console.log(`- ${drink.name}: ${drink.price} baisa`);
});

let cheapestItem = menu[0];
menu.forEach(item => {
  if (item.price < cheapestItem.price) {
    cheapestItem = item;
  }
});

console.log(`Cheapest: ${cheapestItem.name} (${cheapestItem.price} baisa)`);