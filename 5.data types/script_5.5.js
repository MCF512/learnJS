//1 
function camelize(str) {
  let arr = str.split('-');

  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
  }

  return arr.join('')
}

//2
function filterRange(arr, a, b) {

  return arr.filter(i => i >= a && i <= b)
}

//3
function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num < a || num > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

//4
let arr = [5, 2, 1, -10, 8];
arr.sort((start, end) => end - start);

//5
function copySorted(arr) {
  let newArr = [];

  for (const item of arr) {
    newArr.push(item)
  }
  return newArr.sort()
}

//6
function Calculator() {

  this.operators = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function (str) {

    let splited = str.split(' '),
      num1 = +splited[0],
      operator = splited[1],
      num2 = +splited[2]

    if (!this.operators[operator] || isNaN(num1) || isNaN(num2)) {
      return NaN
    }

    return this.operators[operator](num1, num2);
  }

  this.addMethod = function (operator, func) {
    this.operators[operator] = func;
  };
}

//7
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map(item => item.name);
alert(names);

//8
let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

//9
function sortByAge(arr) {
  arr.sort((obj1, obj2) => obj1.age < obj2.age ? -1 : 1);
}

//10
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

//11
function getAvarageAge(users) {
  let sum = 0;

  for (let user of users) {
    sum += user.age
  }

  return sum / users.length
}

//12
function unique(arr) {
  let set = new Set();

  for (const value of arr) {
    set.add(value)
  }
  return Array.from(set)
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings))

//13
function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value
    return obj
  }, {})
}