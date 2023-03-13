//1
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);
// console.log(document.body.lastElementChild.lastElementChild);

//3
let trs = document.querySelectorAll('tr');

for (let i = 0; i < trs.length; i++) {
  trs[i].children[i].style.background = 'red'
}