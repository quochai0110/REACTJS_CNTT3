/*

Lớp Person (abstract class):
Thuộc tính:
name: Tên của người (public).
Phương thức:
displayInfo(): Phương thức in thông tin của đối tượng, được cài đặt trong lớp Person

Lớp Student:
Lớp con kế thừa từ lớp Person.
Thêm thuộc tính:
id: Mã sinh viên.
Phương thức:
displayInfo(): Ghi đè phương thức displayInfo()
từ lớp Person để in thông tin về mã sinh viên và tên sinh viên.

Lớp Teacher:
Lớp con kế thừa từ lớp Person.
Thêm thuộc tính:
subject: Môn học mà giáo viên giảng dạy.
Phương thức:
displayInfo(): Ghi đè phương thức displayInfo() từ lớp Person
để in thông tin về tên giáo viên và môn học.
Yêu cầu:
Tạo đối tượng từ lớp Student và lớp Teacher, sau đó gọi phương thức displayInfo() để in thông tin tương ứng:
Đối với Student: in ra id và name.
Đối với Teacher: in ra name và subject.

*/
class Person {
    constructor(nameValue) {
        this.name = nameValue;
    }
}
class Student extends Person {
    constructor(idValue, nameValue) {
        super(nameValue);
        this.id = idValue;
    }
    displayInfo() {
        return `ID hoc sinh: ${this.id}
Ten hoc sinh: ${this.name}`;
    }
}
class Teacher extends Person {
    constructor(subjectValue, nameValue) {
        super(nameValue);
        this.subject = subjectValue;
    }
    displayInfo() {
        return `Ten giang vien: ${this.name}
Ten mon hoc: ${this.subject}`;
    }
}
let myStudent = new Student("hoang nguen duc", "B24DTCN329");
console.log(myStudent.displayInfo());
let myTeacher = new Teacher("Reacjs", "Trinh Quoc Hai");
console.log(myTeacher.displayInfo());
