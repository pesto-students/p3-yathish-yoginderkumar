function maxProfit(prices) {
  let buy = 0;
  let sell = 1;
  let max_profit = 0;
  while (sell < prices.length) {
    if (prices[buy] < prices[sell]) {
      let profit = prices[sell] - prices[buy];
      max_profit = Math.max(max_profit, profit);
    } else {
      buy = sell;
    }
    sell++;
  }
  return max_profit;
}

console.log(maxProfit([7, 1, 5, 9, 6, 4, 7, 0]));
