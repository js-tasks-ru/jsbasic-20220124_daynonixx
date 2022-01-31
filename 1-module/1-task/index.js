function factorial(n) {
  let number = 1;
  if (n === 0 || n === 1) {
    return 1;
  }
  for (let i = n; i > 1; i--) {
    number = number * i;
  }
  return number;
}
