// Tạo các lớp
// 1. Audience (khán giả)
class Audience {
    constructor(name, email, phone) {
        this.id = Audience.counter++;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    // lấy thông tin chi tiết của khán giả
    getDetail() {
        return `Tên: ${this.name}, Email: ${this.email}, SĐT: ${this.phone}`;
    }
}
Audience.counter = 1;
// 2. Lớp Movie
class Movie {
    constructor(title, genre, ticketPrice) {
        this.id = Movie.counter++;
        this.title = title;
        this.genre = genre;
        this.ticketPrice = ticketPrice;
        this.isShowing = false;
    }
    // Tạo các phương thức trong class Movie
    startShow() {
        this.isShowing = true;
    }
    stopShow() {
        this.isShowing = false;
    }
}
Movie.counter = 1;
//3. tạo các lớp phim(hành động, hài, hoạt hình) kế thừa lớp phim
class _Action extends Movie {
    getSpecialOffers() {
        return ["Miễn phí bắp rang", "tặng poster"];
    }
    getMovieInfo() {
        return `Mô tả phim: Phim hành động gay cấn, kỹ sảo hoành tráng`;
    }
    calculateTicketCost(quantity) {
        return this.ticketPrice * quantity;
    }
}
class _Comedy extends Movie {
    getSpecialOffers() {
        return ["Giảm 10% cho nhóm trên 4 người"];
    }
    getMovieInfo() {
        return `Phim hài nhẹ nhàng, vui nhộn`;
    }
    calculateTicketCost(quantity) {
        let root_price = this.ticketPrice * quantity;
        return quantity > 4 ? root_price * 0.9 : root_price;
    }
}
class _Animation extends Movie {
    getSpecialOffers() {
        return ["Giảm giá cho trẻ em dưới 12 tuổi"];
    }
    getMovieInfo() {
        return `Phim hoạt hình với hình ảnh sống động`;
    }
    calculateTicketCost(quantity) {
        // giảm giá trẻ em dưới 12 tuổi
        // số lượng trẻ em dưới 12 tuổi
        let count = +prompt("nhập số lượng trẻ em dưới 12 tuổi");
        if (quantity >= count) {
            return this.ticketPrice * (quantity - count);
        }
        return 0;
    }
}
// 4. tạo lớp TicketBooking
class TicketBooking {
    constructor(audience, movie, quantity) {
        this.bookingId = TicketBooking.counter++;
        this.audience = audience;
        this.quantity = quantity;
        this.movie = movie;
        this.totalPrice = movie.calculateTicketCost(quantity);
    }
    getDetails() {
        return `Thông tin đặt vé: Khán giả: ${this.audience.name}, Phim ${this.movie.title}....`;
    }
}
TicketBooking.counter = 1;
// 5. Tạo rạp chiếu phim
class Cinema {
    constructor() {
        this.movies = [];
        this.audiences = [];
        this.bookings = [];
    }
    // 1. Thêm khán giả mới:
    addAudience(name, email, phone) {
        let newAudience = new Audience(name, email, phone);
        this.audiences.push(newAudience);
        return newAudience;
    }
    // 2. Thêm phim mới
    addMovie(movie) {
        this.movies.push(movie);
    }
    // 3. Đặt vé ( chọn khán giả, chọn phim, chọn số lượng)
    bookTickets(audienceId, movieId, quantity) {
        let findAudiceneById = this.audiences.find((item) => item.id === audienceId);
        let findMovieById = this.movies.find((item) => item.id === movieId);
        if (findAudiceneById && findMovieById && findMovieById.isShowing) {
            // tiến hành cho đặt vé
            let new_ticketBooking = new TicketBooking(findAudiceneById, findMovieById, quantity);
            return new_ticketBooking;
        }
        return null;
    }
    // 4. Ngừng chiếu phim
    cancelMovie(movieId) {
        let findMovieById = this.movies.find((item) => item.id === movieId);
        if (findMovieById) {
            findMovieById.stopShow();
        }
        else {
            console.log(`không tìm thấy phim có id là: ${movieId}`);
        }
    }
    // 5. Hiển thị danh sách phim đang chiếu:
    listShowingMovies() {
        let result = this.movies.filter((item) => item.isShowing);
        for (let i = 0; i < result.length; i++) {
            console.log(`Phim đang chiếu số: ${i + 1} có thông tin : ${result[i].getMovieInfo()}}`);
        }
    }
    // 6.  Hiển thị các vé đã đặt của một khán giả
    listAudienceBookings(audienceId) {
        let result = this.bookings.filter(item => item.audience.id == audienceId);
    }
}
