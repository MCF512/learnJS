//1
//Через цикл
function sumToLoop(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum
}

//Через рекурсию
function sumToRecursion(n) {
  return (n == 1) ? n : n + sumTo(n - 1)
}

//Через формулу прогрессии
function sumToProg(n) {
  return n * (n - 1) / 2
}

//2
function factorial(n) {
  return (n == 1) ? n : n * factorial(n - 1)
}

//3
//Через рекурсию при больших числах очень долго выполняется
function fib(n) {
  return (n == 1 || n == 2) ? 1 : fib(n - 1) + fib(n - 2)
}

//Так быстрее
function fib2(n) {
  let first = 1
  let second = 1;
  let result = [first, second];
  if (n == first || n == second) return n;

  for (let i = 2; i < n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }

  return result[result.length - 1]
}

//4
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

//Через цикл
function printListLoop(list) {
  let i = list;

  while (i) {
    console.log(i.value);
    i = i.next;
  }

}

//Через рекурсию
function printList(list) {
  console.log(list.value);
  if (list.next != null) {
    printList(list.next)
  }
}

//5
//Через рекурсию
function printListRev(list) {
  if (list.next != null) {
    printListRev(list.next);
  }
  console.log(list.value)
}

//Цикл
function printListRevLoop(list) {
  let i = list;
  let arr = [];

  while (i) {
    arr.push(i.value);
    i = i.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
printListRevLoop(list)
