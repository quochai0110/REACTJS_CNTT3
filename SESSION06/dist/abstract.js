// ẩn đi những tin quan trong và chỉ hiển thị những thông tin cần thiết
class Product {
    setPrice() {
    }
}
// 1 class khi kế thừa 1 class abstract thì phải triển khai các method abstract
class Iphone extends Product {
    getInfo() {
        return `lấy thông tin đầy đủ của sản phẩm `;
    }
    getName() {
        return ` lấy thông tin tên sản phẩm`;
    }
    // ghi đè phương thức: override
    setPrice() {
    }
}
