/*
Lớp Animal (abstract class):
Thuộc tính:
name: Tên của động vật (public).
Phương thức:
makeNoise(): Phương thức abstract phải được định nghĩa lại trong các lớp con.
printName(): Phương thức in ra tên của đối tượng động vật (ví dụ: in name ra màn hình).

Lớp Cat và Dog:
Cả hai lớp này kế thừa từ lớp Animal.
Cài đặt phương thức makeNoise() cho mỗi lớp:
Lớp Cat: In ra "meo meo".
Lớp Dog: In ra "gâu gâu".

Yêu cầu:
Tạo đối tượng từ lớp Cat và Dog, sau đó gọi các phương thức:
printName() để in tên của đối tượng.
makeNoise() để in tiếng kêu của động vật.

*/
class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Ten dong vat la ${this.name}`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log(`${this.name} keu gau gau`);
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log(`${this.name} keu meo meo`);
    }
}
let dog = new Dog("dog1");
dog.makeNoise();
let cat = new Cat("cat1");
cat.makeNoise();
