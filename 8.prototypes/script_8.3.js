//1
Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};

//2
Function.prototype.defer1 = function (ms) {
  let func = this;
  return function (...args) {
    setTimeout(() => func.apply(this, args), ms);
  }
}