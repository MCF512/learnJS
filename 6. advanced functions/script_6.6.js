//1
function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  };

  counter.set = value => count = value;

  counter.decrease = () => count--;

  return counter;
}

//2
function sum(value) {
  let current = value;

  function sumWithCurrent(val) {
    current += val;
    return sumWithCurrent;
  }

  sumWithCurrent.toString = function () {
    return current;
  };

  return sumWithCurrent;
}