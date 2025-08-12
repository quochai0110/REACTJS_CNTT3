// interface : giống như 1 bản hợp đồng mà các bên phải tuân theo
const std2 = {
    name: "Minh",
    age: 20,
    address: "HN",
    getInfo() {
        return ` thông tin sinh viên : tên ${this.name}, tuổi: ${this.age}`;
    },
};
class C {
    getInfo() {
        return ``;
    }
}
