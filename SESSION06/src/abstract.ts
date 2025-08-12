// ẩn đi những tin quan trong và chỉ hiển thị những thông tin cần thiết


abstract class Product{
    // có thể chứa method thường và method abstract
    abstract getInfo():string;
    abstract getName():string;
    setPrice():void{
    }
}
// 1 class khi kế thừa 1 class abstract thì phải triển khai các method abstract
class Iphone extends Product{
    getInfo(): string {
        return `lấy thông tin đầy đủ của sản phẩm `
    }
    getName(): string {
        return ` lấy thông tin tên sản phẩm`
    }
    // ghi đè phương thức: override
    setPrice(): void {
        
    }
}