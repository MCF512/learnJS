//2
const styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-ролл');
styles[Math.floor((styles.length - 1) / 2)] = 'Классика';
console.log(styles.shift());
styles.unshift("Рэп", "Регги");

//4
function sumInput() {
  const arr = [];

  while (true) {
    let question = prompt('Введите значение', 0);

    if (question === null || question === '' || !isFinite(question)) break;

    arr.push(+question)
  }

  let sum = 0;

  return arr.reduce((a, b) => a + b, sum)

}

//5
function getMaxSubSum(arr) {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;

    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      max = Math.max(max, sum);
    }
  }

  return max
}