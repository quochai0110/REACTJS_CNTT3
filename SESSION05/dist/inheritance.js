// Tính kế thừa
class Animal {
    constructor(name_value, color) {
        this.name = name_value;
    }
    sound() {
        console.log(`tiếng kêu của: ${this.name}`);
    }
}
class Dog extends Animal {
    constructor(name, color) {
        super(name, color);
        this.color = color;
    }
    sound() {
        console.log(`tiếng sủa của: ${this.name}`);
    }
    getInfo() {
        return `tên: ${this.name}, màu lông màu: ${this.color}`;
    }
}
let dog1 = new Dog("chó1", "màu trắng ");
// console.log(dog1.sound());
console.log(dog1.getInfo());
