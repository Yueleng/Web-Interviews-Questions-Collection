# LeetCode

## Remove Duplicates from Sorted Array

### Requirement

* Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

* Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

### Example

* INPUT: `nums = [1,1,2]`, OUTPUT: `2`.
* INPUT: `nums = [0,0,1,1,1,2,2,3,3,4]`, OUTPUT: `5`.

### Code

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var lastIndex = 0
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] != nums[lastIndex])
            nums[++lastIndex] = nums[i]
    }

    // if does exist duplicates
    if (lastIndex < nums.length - 1) {
        var len = nums.length
        for (var i = 0; i < len - lastIndex - 1; i++) {
            nums.pop()
        }
    }

    return nums.length
}
```

## Best Time to Buy and Sell Stock II

### Requirement

* Say you have an array for which the ith element is the price of a given stock on day i.

* Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

* You may not engage in multiple transactions at the same day and you must sell the stock before you buy again.

### Example

* INPUT: `[7,1,5,3,6,4]`, OUTPUT: `7`.
* INPUT: `[1,2,3,4,5]`, OUTPUT: `4`.
* INPUT: `[7,6,4,3,1]`, OUTPUT: `0`.

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var currentIndex = 0
    var currentProfit = 0
    if (prices.length == 0)
        return currentProfit
    for (var i = 0; i < prices.length - 1; i++) {
        if (prices[i+1] > prices[i])
            continue
        else {
            currentProfit += Math.max(0, prices[i] - prices[currentIndex])
            currentIndex = i + 1
        }
    }
    currentProfit += Math.max(0, prices[i] - prices[currentIndex])
    return currentProfit
}
```
