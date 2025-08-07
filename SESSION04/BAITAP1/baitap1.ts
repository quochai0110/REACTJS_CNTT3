let string:string[] = ["minh","duy","nhat","long","huy"];

function checkStr(str:string[]): boolean{
    for(let i = 0; i < string.length; i++){
        if(typeof string[i] === "string"){
            return true;
        }
        console.log("tên sinh viên",string[i]);
        
    }
    return false;
}

let result = checkStr(string)