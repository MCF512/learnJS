//1
const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

//2
const obj = {};
function isEmpty(obj) {
  return Object.keys(obj).length == 0 ? true : false
}

//4
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
console.log(Object.values(salaries))
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

//5
function multiplyTwo(object) {
  for (let key in object) {
    if (typeof (object[key]) == 'number') {
      object[key] *= 2;
    }
  }
}
