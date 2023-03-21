/**
 * Statement
 * Given an array where the element at the index i represents the price of a stock on day i, find the maximum profit that you can gain by buying the stock once and then selling it.
 * Note: Stock can only be purchased on a single day and sold on a different day. If no profit can be achieved, we return zero.
 */

function maxProfit(stockPrices) {
  if (stockPrices.length == 1) return 0;
  // if (stockPrices.length == 2) {
  //     return stockPrices[0] < stockPrices[1] ? stockPrices[1]-stockPrices[0] : 0
  // }
  let b = 0, s = b+1, maxProfit = 0;
  while(s < stockPrices.length) {
      if (stockPrices[b] < stockPrices[s]) {
          let currProfit = stockPrices[s] - stockPrices[b]
          maxProfit = currProfit > maxProfit ? currProfit : maxProfit
          s++
      } else {
          b = s, s = s+1
      }
  }
  return maxProfit
}