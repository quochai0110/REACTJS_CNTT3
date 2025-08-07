// Kiểu dữ liệu mảng
//C1: 
let numbers:number[] =[5,8,9];
//C2:
let students : Array<string> =[ "minh", "thu"," hồng"];
// Kiểu dữ liệu Object

let obj :{name:string, age:number, address?:string}= {
    name:"lê văn ánh",
    age:25,
   address:"HN"
}
// Type alias

type ID = string|number; // union
type Username= string;

let username:Username="hồng anh";
let idName: ID="sv01";
// Type UNION : kiểu kết hợp

let id: number|string;
function sum(a:number|string|boolean) {
    
}
// kiểu &  intersection (KIỂU KẾT HỢP)

type A={
    id: number
}
type B={
    name: string,
}
type AB= A & B;
let newObj: AB={
    id:5,
    name:"Minh Thu",
}

 type C={
    id:number
 }
 type D= {
    id:string
 }
 type CD= C&D;
let c:number=9;
c=10;
let isActive:boolean=true;
isActive=false;


