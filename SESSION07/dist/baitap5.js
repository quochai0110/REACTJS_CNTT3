/*
Lớp Account:
Thuộc tính:
id: Mã tài khoản (public).
userName: Tên người dùng (public).
password: Mật khẩu (private).
isLogin: Trạng thái đăng nhập (public).
role: Vai trò người dùng (public).
Phương thức:
login(): Phương thức để đăng nhập, sẽ được kế thừa và ghi đè trong lớp con.
logout(): Phương thức để đăng xuất:
Nếu isLogin là true, thông báo "Đăng xuất thành công"
và cập nhật isLogin thành false.
Nếu isLogin là false, không làm gì cả.

Lớp userAcc:
Lớp con kế thừa từ lớp Account.
Thêm thuộc tính:
status: Trạng thái của người dùng, có thể là active hoặc banned.
Phương thức:
login(): Ghi đè phương thức login() từ lớp Account:
Kiểm tra status của người dùng:
Nếu status là active, cho phép đăng nhập và cập nhật isLogin thành true.
Nếu status là banned, thông báo "Tài khoản đã bị khóa".
 Yêu cầu:
Tạo đối tượng từ lớp userAcc, kiểm tra trạng thái đăng nhập
 với các phương thức login() và logout().
*/
class Account {
    constructor(id, userName, password, isLogin, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    login(password) {
        if (password === this.password) {
            this.isLogin = true;
            console.log("dang nhap thanh cong");
        }
        else {
            console.log("sai mat khau");
        }
    }
    logout() {
        if (this.isLogin) {
            this.isLogin = false;
            console.log("dang xuat thanh cong");
        }
    }
}
class userAcc extends Account {
    constructor(id, userName, password, role, status) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }
    login(password) {
        if (this.status === "banned") {
            console.log("tai khoan da bi khoa");
            return;
        }
        super.login(password);
    }
}
// const user1 = new userAcc("01","tranxuanbach","1234")
