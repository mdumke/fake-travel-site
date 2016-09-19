class Person {
  constructor (name) {
    this.name = name;
  }

  greet () {
    console.log("Hi there, I'm " + this.name);
  }
}

export default Person;
