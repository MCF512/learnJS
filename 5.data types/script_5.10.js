//1
let user = {
  name: "John",
  years: 30
};

const { name, years, isAdmin = false } = user

//2
function topSalary(salaries) {

  let top = 0;
  let nameOfTop = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (top < salary) {
      top = salary;
      nameOfTop = name;
    }
  }
  return nameOfTop;
}

