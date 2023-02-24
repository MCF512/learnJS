//1
//Выведется ли alert?
if ("0") {
  alert('Привет');
} //Да, "0" != "", следовательно "0" == true

//2
let question = prompt('Какое официальное называние JavaScript?', '');

if (question == 'ECMAScript') alert('Верно!');
else alert('Не знаете? "ECMAScript!"');

//3
let num = +prompt('Введите число', '');

if (num > 0) alert(1);
else if (num < 0) alert(-1);
else alert(0);

//4
let result = a + b < 4 ? 'Мало' : 'Много';

//5
let check =
  login == 'Сотрудник' ? message = 'Привет' :
    login == 'Директор' ? message = 'Здравствуйте' :
      login == '' ? message = 'Нет логина' : message = '';
