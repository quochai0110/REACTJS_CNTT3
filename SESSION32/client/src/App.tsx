import React from 'react'
import Counter from './pages/Counter'
import Student from './pages/Student'

export default function App() {
  /* 
    1. NPM I REACT-REDUX REDUX
    2. Tạo các hàm reducer
    3. Tạo rootReducer 
    4. Tạo kho dữ liệu : const store = createStore(rootReducer)
    5. Cung cấp cho toán bộ ứng dụng dùng
     <Provider store ={store}>
    ******************
    6. Muốn lấy dữ liệu trong kho ứng dụng REDUX
    ==> dùng useSelector()
    7. Khi muốn cập nhật state mới thì phải truyền action lên để các hàm reducer xử lý
    const dispatch= useDispatch();
    dispatch(
      {
        type:"INCREASE"
      }
    )
      TRONG HÀM REDUCER PHẢI TÍNH TOÁN TRẢ VỀ STATE MỚI!

  */
  return (
    <div>
      <h1>REDUX</h1>
      <Counter></Counter>
      <hr />
      <Student></Student>
    </div>
  )
}
