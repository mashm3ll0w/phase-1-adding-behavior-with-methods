// Your code here

class Cat{
  constructor(name, sex){
    this.name = name
    this.sex = sex
  }
  speak(){
    return `${this.name} says meow!`
  }
}

class Dog{
  constructor(name, sex){
    this.name = name
    this.sex = sex
  }
  speak(){
    return `${this.name} says woof!`
  } 
}

class Bird{
  constructor(name, sex){
    this.name = name
    this.sex = sex
  }
  speak(){
    if (this.sex === "male"){
      return `It's me! ${this.name}, the parrot!`
    }
    else return `${this.name} says squawk!`
  }
}


// Test data

const fluffy = new Cat("Fluffy", "male")
const scooby = new Dog("Scooby", "male")
const cotton = new Bird("Cotton", "female")
const birdy = new Bird("Birdie", "male")

console.log(fluffy.speak())
console.log(scooby.speak())
console.log(cotton.speak())
console.log(birdy.speak())