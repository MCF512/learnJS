//2
function User(name) {
  this.name = name;
}

let user = new User('Egor');
let user2 = new user.constructor('Oleg');