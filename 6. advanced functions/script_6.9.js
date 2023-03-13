//1
function work(a, b) {
  console.log(a + b);
}

work = spy(work);

work(1, 2);
work(4, 5);

for (let args of work.calls) {
  console.log('call:' + args.join());
}

function spy(func) {

  function wrap(...args) {
    wrap.calls.push(args);
    return func.apply(this, args);
  }

  wrap.calls = [];

  return wrap;
}

//2
function f(x) {
  console.log(x);
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test");
f1500("test");

function delay(f, ms) {

  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  }
}

//3
let f = debounce(alert, 1000);

f(1);
f(2);

setTimeout(() => f(3), 100);
setTimeout(() => f(4), 1100);
setTimeout(() => f(5), 1500);

function debounce(f, ms) {
  let cd = false;

  return function () {
    f.apply(this, arguments);

    cd = true;

    setTimeout(() => cd = false, ms)
  }
}

//4
function f(a) {
  console.log(a)
}

let f1001 = throttle(f, 1001);

f1001(1);
f1001(2);
f1001(3);

function throttle(func, ms) {

  let throttled = false,
    savedArgs,
    savedThis;

  function wrapper() {

    if (throttled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);

    throttled = true;

    setTimeout(function () {
      throttled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}