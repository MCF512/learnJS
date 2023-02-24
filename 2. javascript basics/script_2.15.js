//2
function checkAge(age) {
  return age > 18 ? true : confirm('Родители разрешили?')
}

//3
function min(a, b) {
  return a < b ? a : b;
}

//4
function pow(x, n) {
  if (n < 1) {
    alert('Введите натуральное число для степени');
  } else {
    return x ** n;
  }
}

let x = +prompt('Введите x', ''),
  n = +prompt('Введите n', '');

alert(pow(x, n));
