/*
You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

Input: prices = [10,1,5,6,7,1]

Output: 6

Buy prices[1] and sell prices[4], profit = 7 - 1 = 6.
*/
class Solution {
    /*
      @param {number[]} prices
      @return {number}
     */
    maxProfit(prices) {
      let minPrice = Infinity;
      let maxProfit = 0;

      for (const price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
      }

      return maxProfit;
    }
}

let prices = [10,1,5,6,7,1];
let test = new Solution;
let result = test.maxProfit(prices);
console.log(result);


