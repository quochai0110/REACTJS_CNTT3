function getDataFromApi1() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("lấy data từ API 1 render ra trình duyệt");
            resolve();
        },2000)
    })
}
function getDataFromApi2() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("lấy data từ API2 render ra trình duyệt");
            resolve();
        },2000)
    })
}
function getDataFromApi3() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("lấy data từ API3 render ra trình duyệt");
            resolve();
        },2000)
    })
}
function getDataFromApi4() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("lấy data từ API4 render ra trình duyệt");
            resolve();
        },2000)
    })
}
function runAllTask() {
    getDataFromApi1()
    .then(()=>getDataFromApi2())
    .then(()=>getDataFromApi3())
    .then(()=>getDataFromApi4())
    .then(()=>{
        console.log("tất cả dữ liệu đã render hết");
    })
    .catch(err=>console.log("lỗi!"));
}
runAllTask();