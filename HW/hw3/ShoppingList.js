let shoppingList = ["milk", "eggs", "bread"];

shoppingList.push("apples", "oranges");
console.log("Updated shopping list: ", shoppingList);

shoppingList.pop();
console.log("Shopping list after removing the last item:", shoppingList);

function checkCartCapacity(list) {
    if (list.length > 5) {
      console.log("Your shopping cart is full");
    }
  }
checkCartCapacity(shoppingList);

console.log("Shopping list:");
for (let i = 0; i < shoppingList.length; i++) {
  console.log(`${i + 1}. ${shoppingList[i]}`);
}


function checkisItemInList(item, list) {
    if (list.includes(item)) {
      return item + " is in the shopping list";
    } else {
      return item + " is not in the shopping list";
    }
  }


console.log(checkisItemInList("milk", shoppingList));
console.log(checkisItemInList("oranges", shoppingList));


let shoppingItem = {
    name: "milk",
    price: 12,
    quantity: 1,
  };
  console.log("Shopping item object:", shoppingItem);