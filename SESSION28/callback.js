/* 
 Callback là hàm, được truyền làm đối số của hàm khác.
*/

// function xin số điện thoại

function askForPhoneNumber(callback1) {
  let sdt;
  console.log("Nhật gọi cho Duy xin số của Lan");
  console.log("Đợi mình tý, mình kiểm tra danh bạ");
  setTimeout(() => {
    console.log("Duy: mình tìm xong rồi!");
    sdt = "08456789";
    callback1(sdt);
  }, 3000);
 
}
function processPhoneNumber(result) {
     console.log(`Nhật gọi cho Lan theo số: ${result}`);
}
askForPhoneNumber(processPhoneNumber);
