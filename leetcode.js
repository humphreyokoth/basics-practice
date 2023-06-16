const twoSum = (nums, target) => {
    // Iterate through each number in the array
    for (let i = 0; i < nums.length; i++) {
        // Iterate through the remaining numbers to find pairs
        for (let j = i + 1; j < nums.length; j++) {
            console.log("Checking pair:", nums[i], nums[j]);
            console.log("Checking pair:",j);
            // Check if the sum of current pair equals the target
            if (nums[i] + nums[j] === target) {
                console.log("Match found:", nums[i], "+", nums[j], "=", target);
                // Return the indices of the two numbers that sum up to the target
                return [i, j];
            }
        }
    }
    // No pair found, return undefined (implicitly)
    return undefined;
};
  
  // Example usage:
  const nums = [2, 7, 11, 15];
  const target = 9;
  const result = twoSum(nums, target);
  console.log("Result:", result);
  
  