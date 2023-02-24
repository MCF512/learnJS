//1
function returnSum() {
  let a = +prompt('Введите первое число', '');
  let b = +prompt('Введите второе число', '');

  return a + b
}

//3
function readNumber() {
  let question;

  while (!isFinite(question)) {
    question = prompt('Введите число', '');
  }
  if (question == null || question == '') return null;
  return +question;
}

//5
function random(min, max) {
  return Math.random() * (max - min) + min
}

//6
function randomInteger(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}