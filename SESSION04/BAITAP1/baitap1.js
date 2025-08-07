var string = ["minh", "duy", "nhat", "long", "huy"];
function checkStr(str) {
    for (var i = 0; i < string.length; i++) {
        if (typeof string[i] === "string") {
            return true;
        }
        console.log("tên sinh viên", string[i]);
    }
    return false;
}
var result = checkStr(string);
