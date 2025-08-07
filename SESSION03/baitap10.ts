let numbers=[3,5,8,9,7];
let  string=["hello","world", "apple", "banana",]
let word=""
//"hello world apple banana orange pumpkin cucumber"

// hàm kiểm tra ký tự trùng nhau
function uniqueChar(str:string): boolean {
     for (let i = 0; i < str.length; i++) {
      for (let j = i+1; j < str.length; j++) {
            if(str[i]==str[j]){
                return true;
            }
      }
        
     }
    return false; 
}
console.log("test hàm kiểm tra trùng", uniqueChar("apple"));
function findString(str:any): string{
    let strArray= str.split(" ");
    console.log(strArray);
    let word="";
     for (let i = 0; i < strArray.length; i++) {
        //  console.log("từng từ",strArray[i]);
         // tạo hàm kiểm tra xem trong từ đấy có ký tự trùng nhau hay không?
        if(!uniqueChar(strArray[i])){
            if(word.length<strArray[i].length){
                word= strArray[i];
            }
        }
    }

    return word;
    
}
let result= findString("hello world apple banana orange pumpkin cucumber");
console.log("kết quả:", result);
