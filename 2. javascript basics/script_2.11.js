//1
alert(null || 2 || undefined); // 2

//2
alert(alert(1) || 2 || alert(3)); //2

//3
alert(1 && null && 2); //false

//4
alert(alert(1) && alert(2));// 1; undefined

//5
alert(null || 2 && 3 || 4); //3

//6
let age;
if (age >= 14 && age <= 90) console.log(true);
else console.log(false)

//7 
if (age < 14 && age > 90) console.log(true);
else console.log(false);

//8
if (-1 || 0) alert('first'); //Выполнится
if (-1 && 0) alert('second');//Не выполнится
if (null || -1 && 1) alert('third');//Выполнится

//9
let login = prompt('Введите логин', '');
if (login == 'Админ') {
  let password = prompt('Введите пароль', '');

  if (password == 'Я главный') {
    alert('Здравствуйте!');
  } else if (password == null) {
    alert('Отменено')
  } else {
    alert('Неверный пароль')
  }
} else if (login == null) {
  alert('Отменено');
} else {
  alert('Я вас не знаю');
}