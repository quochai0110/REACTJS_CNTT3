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
async function runAllTask() {
    try {
        await getDataFromApi1();
        await getDataFromApi2();
        await getDataFromApi3();
        await getDataFromApi4();
    } catch (error) {
        console.log("lỗi: ", error);  
    }
}
runAllTask();