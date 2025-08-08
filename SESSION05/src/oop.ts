class Person{
   // Nơi các em khai báo thuộc tính
  public fullName: string;
  private age:number;
    constructor(value_fullname:string,age:number){
        this.fullName= value_fullname;
        this.age=age;
        // việc sử dụng phương thức trong này tốn bộ nhớ !
    }
    // hàm lấy thông tin
    getInfo(): string{
        return `${this.fullName} hiện tại: ${this.age} tuổi!`
    }
    // hàm cập nhật thông tin
    setName(new_name:string) : void{
        this.fullName= new_name;
    }
    getAge():string{
        return `Tuổi hiện tại : ${this.age}`
    }
    setAge(new_age:number):void{
        this.age= new_age;
    }
    // Nơi các em khai báo các phương thức của đối tượng
}
let sv1= new Person("Hồng Vân",20);// sv1 được gọi là instance của lớp Person
// console.log("sv1", sv1.fullName);
sv1.setAge(21);
console.log(sv1.getAge());



 

