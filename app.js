"use strict";

const Fruit = require("./fruit.js");

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

let frank = new Person("frank");

frank.greet();

//-------------------------------------------------------
class Pete extends Person {
    constructor(age) {
        super("Pete");  //call Person constructor and pass an arg.
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`);

    }

    parentGreet() {
        super.greet(); //call greet() from Person class
        this.greet(); //call greet() from this class
    }

}
//-------------------------------------------------------
let pete = new Pete(33);
pete.greet();
pete.parentGreet();

console.log(pete.__proto__ === Pete.prototype);

class Helper {
    static logTwice(msg) {  //static method, don't need to instantiate first, can just call the method with the class directly
    //without need to class via an object of the class, eg. let hlp = new Helper; hlp.logTwice("sdfasf");
        console.log(msg);
        console.log(msg);     
    }

}

Helper.logTwice("hello world");

//-----------------------------------------------------------------------
//class getters and setters
class People {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name.toUpperCase();
    }

    set name(value) {
        if (value.length > 2) {
            this._name = value
        } else {
            console.log("Rejected name change!");
        }
    }
}

let sue = new People("Sue");

console.log(sue.name); //getter

sue.name = "A";  //setter

console.log(sue.name);

console.log(sue._name);  //not really 100% private

//-------------------------------------------------------------
// sub-class with built-in object
class ConvertArray extends Array {
    convert() {
        let returnArray = [];
        this.forEach(value => returnArray.push("converted:" + value));
        return returnArray;
    }
}

let numberArray = new ConvertArray();
numberArray.push(1);
numberArray.push(2);
numberArray.push(3);

console.log(numberArray.convert());

//---------------------------------------------------------------
//module class exported - imported or required in nodejs
let apple = new Fruit("apple");
apple.eat();
