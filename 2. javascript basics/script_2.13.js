//1
let i = 3;

while (i) {
  alert(i--);
} //1

//2
let i2 = 0;
while (++i2 < 5) alert(i2);//1-4
while (i2++ < 5) alert(i2);//1-5

//3
for (let i = 0; i < 5; i++) alert(i);//0-5
for (let i = 0; i < 5; ++i) alert(i);//0-4

//4
for (let j = 2; j <= 10; j++) {
  if (j % 2 == 0) console.log(j)
}

//5
for (let i = 0; i < 3; i++) {
  alert(`number ${i}!`);
}

let i3 = 0;
while (i3 < 3) {
  alert(`number ${i3}!`);
  i3++
}

//6
let number;
while (number < 101 && num) {
  number = +prompt('Введите число больше 100', '');
}

//7
let n = +prompt('Введите максимальное число', '');
breakLoop: for (let k = 2; k <= n; k++) {

  for (let j = 2; j < k; j++) {
    if (k % j == 0) continue breakLoop
  }

  console.log(k)
}