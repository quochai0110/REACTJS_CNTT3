/* BÀI TẬP TỔNG HỢP OOP */

// B1:  Tạo interface Animal
interface IAnimal{
    // CÁC THUỘC TÍNH
    name: string // tên động vật
    age: number // tuổi động vật
    category:string|number|boolean // loại động vật
    // CÁC PHƯƠNG THỨC
    sound():string // trả về âm thanh của động vật
    getDetail(): string // Lấy thông tin chi tiết của Động Vật
    move(): string // Mô tả di chuyển của động vật
    feed(): string // Mô tả thức ăn của động vật
}
// B2: Tạo abstract class Animal
abstract class Animal implements IAnimal{
    name:string;
   age:number;
    category: string|number|boolean;
    constructor(name:string, age:number, category:string|number|boolean){
        this.name=name;
        this.age=age;
        this.category=category;
    }
    sound(): string {
        return ``
    }
    getDetail(): string {
        return ``
    }
    move(): string {
        return ``
    }
    feed(): string {
        return ``
    }
}
// B3: Tạo các class con kế thừa class cha
class Bird extends Animal{
   private wingSpan: number|string // Sảng cánh của chim 
    constructor(name:string, age:number, wingSpan:string|number){
        super(name ,age ,wingSpan);
        this.name= name;
        this.age= age;
        this.wingSpan=wingSpan;
    }
    move():string{
     return ` phương thức di chuyển của ${this.name} là bay`;
    }
}
class Mammal extends Animal{
    // Động vật có vú 
   private furColor: string;
    constructor(name:string, age:number, furColor:string){
        super(name,age, furColor);
        this.name=name;
        this.age=age;
        this.furColor= furColor;
    }
    move():string{
        return ` phương thức di chuyển của ${this.name} là chạy `
    }
    // viết phương thức điều khiển các thuộc tính private
    setFulColor(new_furcolor:string){
        this.furColor= new_furcolor;
    }
    getFurColor():string{
        return ` Màu của động vật có vú: ${this.furColor}`;
    }
}
class RepTitle extends Animal{
   private venomous: boolean;
    constructor(name:string, age:number, venomous:boolean){
        super(name, age, venomous);
        this.name=name;
        this.age=age;
        this.venomous= venomous;
    }
    move(): string{
        return `Phương thức di chuyển của ${this.name} là bò`
    }
}
// B4: Tạo mảng động vật 
let animals=[new Bird("Đại Bàng",2,10),new Mammal("Hổ",5,"Màu Vàng" ),
    new RepTitle("Rắn",3,true)];
animals.forEach(item=>console.log(item.move())); // Tính đa hình 