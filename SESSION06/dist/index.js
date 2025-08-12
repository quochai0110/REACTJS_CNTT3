// OOP
class A {
}
class B {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return ` tên của bạn là: ${this.name}`;
    }
}
const std1 = new B("Minh");
console.log("sdt1", std1.getName());
