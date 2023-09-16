// Maximum Subarray
// Given an integer array nums, find the subarray with the largest sum, and return its sum.

//Using Kadane's algorithm
// The idea of Kadane’s algorithm is to maintain a variable max_sum_till_now that stores the maximum sum contiguous subarray ending at current index
// and a variable last_max_sum stores the maximum sum of contiguous subarray found so far,
// Everytime there is a positive-sum value in max_sum_till_now compare it with last_max_sum and update last_max_sum if it is greater than last_max_sum.

// So the main Intuition behind Kadane’s algorithm is,
// – the subarray with negative sum is discarded (by assigning max_sum_till_now = 0 in code).

// – we carry subarray till it gives positive sum.
var maximumSubarray = (arr) => {
  let last_max_sum = Number.MIN_SAFE_INTEGER;
  let start = 0,
    s = 0,
    end = 0,
    max_sum_till_now = 0;
  for (let i = 0; i < arr.length; i++) {
    max_sum_till_now += arr[i];
    if (last_max_sum < max_sum_till_now) {
      last_max_sum = max_sum_till_now;
      start = s;
      end = i;
    }
    if (max_sum_till_now < 0) {
      max_sum_till_now = 0;
      s = i + 1;
    }
  }

  return [start, end, last_max_sum];
};

export default maximumSubarray;
