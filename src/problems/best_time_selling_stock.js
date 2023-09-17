// Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the priceof a given stock on the ith day.
// You want to maximize your profit by choosing a single dayto buy one stock and choosing a different day in the future to sell that stock.


//Using greedy approach
var bestTimeToSellStock = (arr) => {
  let current_buy_price = arr[0],
    start_index = 0,
    end_index = 0,
    current_profit = 0;
  for (let i = 1; i < arr.length; i++) {
    if (current_buy_price > arr[i]) { //check if current index value is less than current buy value
      current_buy_price = arr[i]; // if yes make the current index value to current buy value
      start_index = i + 1;
    } else if (arr[i] - current_buy_price > current_profit) {//if current index - buy price > current profit; make this new value of current profit
      current_profit = arr[i] - current_buy_price;
      end_index = i + 1;
    }

    // for (let j = i + 1; j < arr.length - 1; j++) {
    //   current_profit = arr[j] - arr[i];
    //   if (max_profit < current_profit) {
    //     max_profit = current_profit;
    //     end_index = j + 1;
    //     start_index = i + 1;
    //   }
  }

  return [start_index, end_index, current_profit];
};

export default bestTimeToSellStock;
