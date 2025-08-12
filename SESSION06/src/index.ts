// OOP

interface IProduct{
    name:string,
    price:number
}
class A implements IProduct{
    name:string
    price: number
}
class B {
    private name:string;
    constructor(name:string){
        this.name=name;
    }
    getName():string{
        return` tên của bạn là: ${this.name}`
    }

}
const std1= new B("Minh");
console.log("sdt1", std1.getName());
