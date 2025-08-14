// HỌC GENERIC!
// Một số kiểu generic hay dùng
// 1. Mảng

let numbers: number[]=[1,2,3];
let students: Array<string>=["hoa","hồng","nhung"];

// 2. Record : bản ghi 
const userInfo: Record<string,number|string>={
    name:"hoa",
    age:1
}

// 3. Partial kiểu tùy chọn 

interface User{
    name:string,
    age:number,
    address:string
}
const std1:Partial <User>={
    name: "Hoa",
    
}
// 4. Readonly Chỉ đọc(hiển thị) không được cập nhật dữ liệu 
interface Score{
    math:number,
    physic: number
}
const score :Readonly<Score>={
    math:9,
    physic:4,
}
// score.math=7;
// 5. Pick lựa chọn
interface Contact{
    phone:string,
    email:string,
    address:string
}

let contact : Pick<Contact,"phone"|"email">={
    phone:"8484854858",
    email:""
}


// 6. Kiểu Omit loại bỏ một số key không cần thiết
