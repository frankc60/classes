module.exports = class Fruit {
    constructor(name) {
        this.fruit = name;
    }

    eat() {
        console.log("yum, that was a nice " + this.fruit);
    }

}