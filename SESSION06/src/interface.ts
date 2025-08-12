// interface : giống như 1 bản hợp đồng mà các bên phải tuân theo

interface Student{
    name:string;
    age:number;
    address:string;
    // phương thức chỉ viết tên hàm và không viết logic bên trong
    getInfo():string;
}
interface Contact{
    email:string;
    phone:string;
}
const std2:Student= {
    name:"Minh",
    age:20,
    address:"HN",
    getInfo():string {
            return ` thông tin sinh viên : tên ${this.name}, tuổi: ${this.age}`
    },
}

class C implements Student,Contact{
    name:string;
    age:number;
    address: string;
    email: string;
    phone: string;
    getInfo(): string {
        return ``
    }
}