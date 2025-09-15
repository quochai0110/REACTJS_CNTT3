function calculate(a,b,callback) {
    let result= a+b;
    callback(result);
}

// định nghĩa hàm callbackFunction để hiển thị kết quả
function callbackFn(print) {
    console.log(`ket quả: ${print}`);
    
}
calculate(4,5,callbackFn);