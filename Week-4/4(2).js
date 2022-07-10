var Person = function () {};
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

// TODO: create the class Teacher and a method teach
var Teacher = function () {
  Person.call(this);
};

Teacher.prototype.teach = function (subject) {
  this.subject = subject;
  console.log(
    `${this.name} of age ${this.age} is now teaching ${this.subject}`
  );
};

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

var him = new Teacher();
him.initialize("Adam", 45);
him.teach("Inheritance");
