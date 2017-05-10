function getMaxProfit(stockPrices) {
  let i = stockPrices.length - 2,
      highPrice = stockPrices[i + 1],
      profits = [];

  while (i >= 0) {
    if (highPrice > stockPrices[i]) {
      profits.push(highPrice - stockPrices[i]);
    } else {
      highPrice = stockPrices[i]
    }
    i--;
  }

  profits.sort((a,b) => a - b)
  return profits[profits.length - 1];

}
