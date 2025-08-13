/* 
Class Vehicle:
Thuộc tính:
name: Tên phương tiện (protected).
speed: Tốc độ của phương tiện (protected).
id: Mã định danh của phương tiện (protected).
Phương thức:
slowDown(): Phương thức để giảm tốc độ.
speedUp(): Phương thức để tăng tốc độ.
showSpeed(): Phương thức để in ra tốc độ hiện tại.
Class Bicycle:
Lớp Bicycle kế thừa từ Vehicle.
Thêm thuộc tính:
gear: Số bánh răng của xe đạp (private).
Tạo phương thức:
showInfo(): In ra tất cả thông tin của xe đạp,
 bao gồm thông tin từ lớp Vehicle và thêm thuộc tính gear.
*/
class Vehicle{
    protected name:string;
    protected speed:number;
    protected id:number;
    constructor(name:string, speed:number, id:number){
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown():number{
        if(this.speed<= 0){
            console.log("khong the giam toc");
            return;
        }
        return this.speed -= 10;
    }
    speedUp():number{
        if(this.speed >= 150){
            console.log("Khong the tang toc");
            return;
            
        }
        return this.speed += 10;
    }   
    showSpeed(){
        console.log(`Toc do hien tai la: ${this.speed}`);
    }
}

class Bycicle extends Vehicle{
    private gear:number;
    constructor(name:string, speed:number, id: number, gear:number){
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo(){
        console.log(`Ten: ${this.name}, id: ${this.id}, speed: ${this.speed}, gear: ${this.gear}`);
    }
}

let bicycle = new Bycicle("yamaha", 123, 12, 2);
bicycle.showInfo();