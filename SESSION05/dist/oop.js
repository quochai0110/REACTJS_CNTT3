class Person {
    constructor(value_fullname, age) {
        this.fullName = value_fullname;
        this.age = age;
        // việc sử dụng phương thức trong này tốn bộ nhớ !
    }
    // hàm lấy thông tin
    getInfo() {
        return `${this.fullName} hiện tại: ${this.age} tuổi!`;
    }
    // hàm cập nhật thông tin
    setName(new_name) {
        this.fullName = new_name;
    }
    getAge() {
        return `Tuổi hiện tại : ${this.age}`;
    }
    setAge(new_age) {
        this.age = new_age;
    }
}
let sv1 = new Person("Hồng Vân", 20); // sv1 được gọi là instance của lớp Person
// console.log("sv1", sv1.fullName);
sv1.setAge(21);
console.log(sv1.getAge());
