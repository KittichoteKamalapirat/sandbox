// Assuming the array is sorted by dates in ascending order
// Otherwise -> have to sort first
const priceArray = [
  { date: "2021-01-01", closePrice: 67.24689 },
  { date: "2021-01-02", closePrice: 26.73638 },
  { date: "2021-01-03", closePrice: 59.92817 },
  { date: "2021-01-04", closePrice: 65.88383 },
  { date: "2021-01-05", closePrice: 80.63143 },
];

//Answer for Question 1
//Time complexity = O(N)
//Space complexity = O(1)
//logic behind -> when price goes up, check whether profit is higher than the maximum profit. when price does down, update minPrice
const findMaxProfit1 = (prices) => {
  if (prices === null || prices.length === 0) {
    return 0;
  }
  let maxProfit = 0;
  let minPrice = prices[0].closePrice;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i].closePrice < minPrice) {
      minPrice = prices[i].closePrice;
    } else {
      const profit = prices[i].closePrice - minPrice;
      maxProfit = profit > maxProfit ? profit : maxProfit;
    }
  }
  return maxProfit;
};

//Answer for Question 2
//Time complexity = O(N)
//Space complexity = O(1)
//logic behind -> when price goes up, sell and rebuy. when price goes down, update minPrice
const findMaxProfit2 = (prices) => {
  if (prices === null || prices.length === 0) {
    return 0;
  }
  let profit = 0;
  let minPrice = prices[0].closePrice;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i].closePrice > minPrice) {
      profit += prices[i].closePrice - minPrice;
      minPrice = prices[i].closePrice;
    } else if (prices[i].closePrice < minPrice) {
      minPrice = prices[i].closePrice;
    }
  }
  return profit;
};

console.log("1. Profit = ", findMaxProfit1(priceArray));
console.log("2. Profit", findMaxProfit2(priceArray));
