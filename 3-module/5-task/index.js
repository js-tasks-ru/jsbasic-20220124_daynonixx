function getMinMax(str) {
  let nums = str.split(' ').filter(item => parseInt(item)).sort((a, b) => a - b);
  return {
    min: parseFloat(nums[0]),
    max: parseFloat(nums[nums.length - 1])
  };
}

