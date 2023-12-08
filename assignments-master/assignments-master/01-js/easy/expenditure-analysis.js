/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryMap = {}; // object to store category and there total spending

  // Itereate through each transactions
  transactions.forEach(transaction => {
    const { category, price } = transaction;

    //Check if category already exist in the Map.
    if (categoryMap[category]) {
      categoryMap[category] += price;  // Add the price to existing category spending
    } else {
      categoryMap[category] = price; // Initialize the category spending
    }
  });

  const result = Object.keys(categoryMap).map(category => ({
    category,
    totalSpent: categoryMap[category]
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;

