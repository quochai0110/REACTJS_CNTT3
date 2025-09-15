function delayedCallback(callback,number){
    setTimeout(()=>{
        callback();
    },number)
}
// định nghĩa hàm callback

function callbackFn(){
    console.log("học bất đồng bộ trong js");
    
}
delayedCallback(callbackFn,3000);