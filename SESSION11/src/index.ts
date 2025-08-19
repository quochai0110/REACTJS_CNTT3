// Tạo các lớp
// 1. Audience (khán giả)

class Audience {
  static counter = 1;
  id: number;
  name: string;
  email: string;
  phone: string;
  constructor(name: string, email: string, phone: string) {
    this.id = Audience.counter++;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
  // lấy thông tin chi tiết của khán giả
  getDetail(): string {
    return `Tên: ${this.name}, Email: ${this.email}, SĐT: ${this.phone}`;
  }
}
// 2. Lớp Movie
abstract class Movie {
  static counter = 1;
  id: number;
  title: string;
  genre: string;
  ticketPrice: number;
  isShowing: boolean;
  constructor(title: string, genre: string, ticketPrice: number) {
    this.id = Movie.counter++;
    this.title = title;
    this.genre = genre;
    this.ticketPrice = ticketPrice;
    this.isShowing = false;
  }
  // Tạo các phương thức trong class Movie
  startShow(): void {
    this.isShowing = true;
  }
  stopShow(): void {
    this.isShowing = false;
  }
  // 3 phương thức abstract
  // tính tổng tiền số vé
  abstract calculateTicketCost(quantity: number): number;
  // các ưu đãi
  abstract getSpecialOffers(): string[];
  // mô tả phim
  abstract getMovieInfo(): string;
}
//3. tạo các lớp phim(hành động, hài, hoạt hình) kế thừa lớp phim
class _Action extends Movie {
  getSpecialOffers(): string[] {
    return ["Miễn phí bắp rang", "tặng poster"];
  }
  getMovieInfo(): string {
    return `Mô tả phim: Phim hành động gay cấn, kỹ sảo hoành tráng`;
  }
  calculateTicketCost(quantity: number): number {
    return this.ticketPrice * quantity;
  }
}
class _Comedy extends Movie {
  getSpecialOffers(): string[] {
    return ["Giảm 10% cho nhóm trên 4 người"];
  }
  getMovieInfo(): string {
    return `Phim hài nhẹ nhàng, vui nhộn`;
  }
  calculateTicketCost(quantity: number): number {
    let root_price = this.ticketPrice * quantity;
    return quantity > 4 ? root_price * 0.9 : root_price;
  }
}
class _Animation extends Movie {
  getSpecialOffers(): string[] {
    return ["Giảm giá cho trẻ em dưới 12 tuổi"];
  }
  getMovieInfo(): string {
    return `Phim hoạt hình với hình ảnh sống động`;
  }
  calculateTicketCost(quantity: number): number {
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
  static counter = 1;
  bookingId: number;
  audience: Audience;
  movie: Movie;
  quantity: number;
  totalPrice: number;
  constructor(audience: Audience, movie: Movie, quantity: number) {
    this.bookingId = TicketBooking.counter++;
    this.audience = audience;
    this.quantity = quantity;
    this.movie = movie;
    this.totalPrice = movie.calculateTicketCost(quantity);
  }
  getDetails(): string {
    return `Thông tin đặt vé: Khán giả: ${this.audience.name}, Phim ${this.movie.title}....`;
  }
}
// 5. Tạo rạp chiếu phim
class Cinema {
  movies: Movie[] = [];
  audiences: Audience[] = [];
  bookings: TicketBooking[] = [];

  // 1. Thêm khán giả mới:
  addAudience(name: string, email: string, phone: string): Audience {
    let newAudience = new Audience(name, email, phone);
    this.audiences.push(newAudience);
    return newAudience;
  }
  // 2. Thêm phim mới
  addMovie(movie: Movie): void {
    this.movies.push(movie);
  }
  // 3. Đặt vé ( chọn khán giả, chọn phim, chọn số lượng)
  bookTickets(
    audienceId: number,
    movieId: number,
    quantity: number
  ): TicketBooking | null {
    let findAudiceneById = this.audiences.find(
      (item) => item.id === audienceId
    );
    let findMovieById = this.movies.find((item) => item.id === movieId);
    if (findAudiceneById && findMovieById && findMovieById.isShowing) {
      // tiến hành cho đặt vé
      let new_ticketBooking = new TicketBooking(
        findAudiceneById,
        findMovieById,
        quantity
      );
      return new_ticketBooking;
    }
    return null;
  }
  // 4. Ngừng chiếu phim
  cancelMovie(movieId: number): void {
    let findMovieById = this.movies.find((item) => item.id === movieId);
    if (findMovieById) {
      findMovieById.stopShow();
    } else {
      console.log(`không tìm thấy phim có id là: ${movieId}`);
    }
  }
  // 5. Hiển thị danh sách phim đang chiếu:
  listShowingMovies(): void {
    let result = this.movies.filter((item) => item.isShowing);
    for (let i = 0; i < result.length; i++) {
      console.log(
        `Phim đang chiếu số: ${i + 1} có thông tin : ${result[
          i
        ].getMovieInfo()}}`
      );
    }
  }
  // 6.  Hiển thị các vé đã đặt của một khán giả
  listAudienceBookings(audienceId: number): void {
   let result= this.bookings.filter(item=>item.audience.id==audienceId);
  }
}
