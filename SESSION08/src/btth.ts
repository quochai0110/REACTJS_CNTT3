// CÁC BƯỚC LÀM
// BƯỚC 1: Tạo class Book

class Book {
  id: number;
  title: string;
  author: string;
  year: number;
  constructor(id: number, title: string, author: string, year: number) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
  }
}
// BƯỚC 2: Tạo class Library và các phương thức
class Library<T extends { id: number; name: string, author:string, year:number }> {
  books: T[] = []; // Tạo 1 mảng chứa danh sách các quyển sách

  // 1. Thêm sách vào thư viện
  addBook(book: T): void {
    this.books.push(book);
  }
  // 2. Tìm sách theo id, nếu có trả về sách, không có trả về undefined
  getBookById(id: number): T | undefined {
    return this.books.find((item) => item.id === id);
  }
  // 3. Xóa sách khỏi thư viện
  removeBook(id: number): void {
    // kiểm tra xem id có tồn tại hay không?
    let index = this.books.findIndex((item) => item.id === id);
    if (index != -1) {
      let confirmDelete = confirm(
        `ban có chắc chắn muốn xóa sách: ${this.books[index].name} không?`
      );
      if (confirmDelete) {
        this.books.splice(index, 1);
      }
    } else {
      console.log(`khong tìm thấy sách có id là : ${id}`);
    }
  }
  // 4. updateBook
  updateBook(id: number, updatedBook: T): void {
    let index = this.books.findIndex((item) => item.id === id);
    if (index != -1) {
      this.books[index] = updatedBook;
    } else {
      console.log(`khong tìm thấy sách có id là : ${id}`);
    }
  }
  // 5. listBooks(): T[] – Lấy danh sách tất cả sách trong thư viện.( for, forEach...)
  // 6. findBooksByTitleOrAuthor(searchTerm: string): T[] – Tìm sách theo tên hoặc tác giả.
  findBooksByTitleOrAuthor(searchTerm: string):T[]{
    return this.books.filter(item=>item.name.includes(searchTerm.toLowerCase()))||
    this.books.filter(item=>item.author.includes(searchTerm.toLowerCase()))
  }
  // 7. getTotalBooks(): number: đếm tổng sách có trong thư viện
  getTotalBooks():number{
    return this.books.length;
  }
  // 8. tìm sách theo năm xuất bản
  findBooksByYear(year: number): T[] {
    return this.books.filter(item=>item.year===year);
  }
}
