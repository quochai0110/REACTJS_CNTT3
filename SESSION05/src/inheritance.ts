// Tính kế thừa
class Animal{
   public name: string;
   protected color: string;
   constructor(name_value:string, color:string){
    this.name= name_value
   }
   sound(): void{
        console.log(`tiếng kêu của: ${this.name}`);
   }
}
class Dog extends Animal{
    constructor(name:string, color:string){
        super(name,color);
        this.color= color;
    }
    sound(): void{
        console.log(`tiếng sủa của: ${this.name}`);
   }
   getInfo() :string{
    return `tên: ${this.name}, màu lông màu: ${this.color}`
   }
}   
let dog1= new Dog("chó1","màu trắng ");
// console.log(dog1.sound());
console.log(dog1.getInfo());


