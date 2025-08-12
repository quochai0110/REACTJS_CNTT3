/* BÀI TẬP TỔNG HỢP OOP */
// B2: Tạo abstract class Animal
class Animal {
    constructor(name, age, category) {
        this.name = name;
        this.age = age;
        this.category = category;
    }
    sound() {
        return ``;
    }
    getDetail() {
        return ``;
    }
    move() {
        return ``;
    }
    feed() {
        return ``;
    }
}
// B3: Tạo các class con kế thừa class cha
class Bird extends Animal {
    constructor(name, age, wingSpan) {
        super(name, age, wingSpan);
        this.name = name;
        this.age = age;
        this.wingSpan = wingSpan;
    }
    move() {
        return ` phương thức di chuyển của ${this.name} là bay`;
    }
}
class Mammal extends Animal {
    constructor(name, age, furColor) {
        super(name, age, furColor);
        this.name = name;
        this.age = age;
        this.furColor = furColor;
    }
    move() {
        return ` phương thức di chuyển của ${this.name} là chạy `;
    }
    // viết phương thức điều khiển các thuộc tính private
    setFulColor(new_furcolor) {
        this.furColor = new_furcolor;
    }
    getFurColor() {
        return ` Màu của động vật có vú: ${this.furColor}`;
    }
}
class RepTitle extends Animal {
    constructor(name, age, venomous) {
        super(name, age, venomous);
        this.name = name;
        this.age = age;
        this.venomous = venomous;
    }
    move() {
        return `Phương thức di chuyển của ${this.name} là bò`;
    }
}
// B4: Tạo mảng động vật 
let animals = [new Bird("Đại Bàng", 2, 10), new Mammal("Hổ", 5, "Màu Vàng"),
    new RepTitle("Rắn", 3, true)];
animals.forEach(item => console.log(item.move())); // Tính đa hình 
