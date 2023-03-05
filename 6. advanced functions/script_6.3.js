//4
function sum(a) {
  return function (b) {
    return a + b;
  }
}

console.log(sum(2)(2))

//5
function inBetween(a, b) {
  return function (num) {
    return num <= b && num >= a;
  }
}

function inArray(arr) {
  return function (num) {
    return arr.includes(num)
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1, 2, 10])));

//6
function byField(fieldName) {
  return function (a, b) {
    return a[fieldName] > b[fieldName] ? 1 : -1
  }
}

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

users.sort(byField('name'));
users.sort(byField('age'));

//7
function makeArmy() {

  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function () { // функция shooter
      console.log(i); // должна выводить порядковый номер
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0]();
army[5]();