//1
function sumSalaries(salaries) {
  let sum = 0;

  const values = Object.values(salaries);

  for (let salary of values) {
    sum += salary
  }
  return sum
}

//2
function count(obj) {
  return Object.keys(obj).length
}