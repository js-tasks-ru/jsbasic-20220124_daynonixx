function sumSalary(salaries) {
  let sum = 0;
  for (let item in salaries){
    if (helper(salaries[item])){
      sum += salaries[item];
    }
  }
  return sum;
}
function helper(item){
  return (typeof item === 'number' && item % 1 === 0 && item !== Number.POSITIVE_INFINITY && item !== Number.NEGATIVE_INFINITY);
}
