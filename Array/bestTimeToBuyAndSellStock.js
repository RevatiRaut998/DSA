//Bruteforce approach
//time O(n^2) , space O(1)
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfitSoFar = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
        for (let j = i + 1; j < prices.length; j++) {
            let profit = prices[j] - minPrice;
            if (profit > maxProfitSoFar) {
                maxProfitSoFar = profit;
            }
        }
    }

    return maxProfitSoFar;
};

//Optimised approach
//time O(n) , space O(1)
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]; // update min buy price
        }
        let profit = prices[i] - minPrice; // profit if sold today
        if (profit > maxProfit) {
            maxProfit = profit; // update max profit
        }
    }

    return maxProfit;
};

// Brute force approach
// Pick a buy day first (i) → fix the price you buy at.
// Then check all future sell days (j > i) to see which one gives the maximum profit.
// Outer loop fixes buy, inner loop finds best sell after that buy.
// Time complexity: O(n²)

// Optimized approach
// Scan the array once.
// At each day (i), do two things at the same time:
// Update minPrice → the cheapest buy price seen so far
// Calculate profit if we sold today (prices[i] - minPrice)
// Update maxProfit if this profit is bigger.
// No nested loop needed because minPrice already remembers the best buy day so far.
// Time complexity: O(n)

// ✅ Key insight:
// Brute force → “pick a buy first, then look ahead for sell”
// Optimized → “for each day, consider it as a potential sell, and always know the best buy so far”
// It’s basically the same logic, just smarter and more efficient.