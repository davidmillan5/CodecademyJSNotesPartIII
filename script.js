/*Classes */

//Introduction to Classes

class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior++;
  }
}

const halley = new Dog('Halley');
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console

//Constructors

class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.deparment = department;
  }
}

//Instances

class Surgeon2 {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

surgeonRomero = new Surgeon2('Francisco Romero', 'Cardiovascular');
surgeonJackson = new Surgeon2('Ruth Jackson', 'Orthopedics');

console.log(surgeonRomero.name);

//Methods

class Surgeon3 {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get department() {
    return this._department;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonRomero2 = new Surgeon3('Francisco Romero', 'Cardiovascular');
const surgeonJackson2 = new Surgeon3('Ruth Jackson', 'Orthopedics');

//Method Calls

class SurgeonI {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get department() {
    return this._department;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonRomero5 = new SurgeonI('Francisco Romero', 'Cardiovascular');
const surgeonJackson5 = new SurgeonI('Ruth Jackson', 'Orthopedics');

console.log(surgeonRomero5.name);

surgeonRomero5.takeVacationDays(3);

console.log(surgeonRomero5.remainingVacationDays);
