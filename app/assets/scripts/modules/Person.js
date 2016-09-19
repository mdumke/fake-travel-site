var Person = function (name) {
  this.name = name;
  this.greet = function () {
    console.log("Hi, I'm " + this.name);
  };
}

module.exports = Person;

