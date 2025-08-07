var numbers = [3, 5, 8, 9, 7];
var string = ["hello", "world", "apple", "banana",];
var word = "";
//"hello world apple banana orange pumpkin cucumber"
// hàm kiểm tra ký tự trùng nhau
function uniqueChar(str) {
    for (var i = 0; i < str.length; i++) {
        for (var j = i + 1; j < str.length; j++) {
            if (str[i] == str[j]) {
                return true;
            }
        }
    }
    return false;
}
console.log("test hàm kiểm tra trùng", uniqueChar("apple"));
function findString(str) {
    var strArray = str.split(" ");
    console.log(strArray);
    var word = "";
    for (var i = 0; i < strArray.length; i++) {
        //  console.log("từng từ",strArray[i]);
        // tạo hàm kiểm tra xem trong từ đấy có ký tự trùng nhau hay không?
        if (!uniqueChar(strArray[i])) {
            if (word.length < strArray[i].length) {
                word = strArray[i];
            }
        }
    }
    return word;
}
var result = findString("hello world apple banana orange pumpkin cucumber");
console.log("kết quả:", result);
