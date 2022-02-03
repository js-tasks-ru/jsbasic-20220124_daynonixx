function sumSalary(salaries) {
  let sum = 0;
  for (let item in salaries) {
    if (salaries[item] % 1 === 0) {
      sum += salaries[item];
    }
  }
  return sum;
}
