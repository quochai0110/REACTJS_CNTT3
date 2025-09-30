import React from "react";

export default function ProductManager() {
  return (
    <div>
      <h1> Quản lý sản phẩm </h1>
      <input type="text" placeholder="nhập tên sản phẩm" /> <br />
      <input type="file" /> <br />
      <input type="number" placeholder="nhập giá"/> <br />
      <button>thêm sản phẩm</button>
      <table border={1}>
        <thead>
            <tr>
                <th>STT</th>
                <th>Tên sản phẩm</th>
                <th>Ảnh</th>
                <th>Gía</th>
            </tr>
        </thead>
      </table>
    </div>
  );
}
