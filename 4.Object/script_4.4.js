//2
const calc = {
  read: () => {
    this.a = +prompt('Введите первое число', 0);
    this.b = +prompt('Введите второе число', 0);
  },
  sum: () => {
    return this.a + this.b;
  },
  mul: () => {
    return this.a * this.b
  }
}

calc.read();
alert(calc.sum());
alert(calc.mul());

//3

const ladder = {
  step: 0,
  up: () => {
    this.step++;
    return this;
  },
  down: () => {
    this.step--;
    return this;
  },
  showStep: () => {
    alert(this.step);
    return this;
  }
}