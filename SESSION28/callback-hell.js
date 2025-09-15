/* 
callback là gì: nhiều hàm lồng vào nhau, và tác vụ trước đợi tác vụ sau
hoàn thành.Gây tình trạng code khó đọc== rối
*/
function getDataFromApi1(callback) {
    setTimeout(() => {
        console.log("lấy data từ API 1 render dữ liệu ra trình duyệt");
        callback();
    }, 2000);
}
function getDataFromApi2(callback) {
    setTimeout(() => {
        console.log("lấy data từ API 2 render dữ liệu ra trình duyệt");
        callback();
    }, 2000);
}
function getDataFromApi3(callback) {
    setTimeout(() => {
        console.log("lấy data từ API 3 render dữ liệu ra trình duyệt");
        callback();
    }, 2000);
}
function getDataFromApi4(callback) {
    setTimeout(() => {
        console.log("lấy data từ API 4 render dữ liệu ra trình duyệt");
        console.log("tất cả hoàn thành!");  
    }, 2000);
}

function runAllTask() {
    getDataFromApi1(()=>{
        getDataFromApi2(()=>{
            getDataFromApi3(()=>{
                getDataFromApi4();
            })
        })
    })
}
runAllTask();