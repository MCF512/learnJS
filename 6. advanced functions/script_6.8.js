//1
function printNumbers(from, to) {
  let current = from;

  let interval = setInterval(() => {
    console.log(current);

    if (current === to) clearInterval(interval);

    current++
  }, 1000)
}

function printNumbersTimeout(from, to) {
  let current = from;

  setTimeout(function set() {
    console.log(current);

    if (current < to) {
      setTimeout(set, 1000);
    }

    current++
  }, 1000);
}

printNumbersTimeout(1, 4)