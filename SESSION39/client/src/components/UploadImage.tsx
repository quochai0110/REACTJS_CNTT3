import axios from 'axios';
import React, { useState } from 'react'

export default function UploadImage() {
    const [image, setImage] = useState<string>("");
    const [url,setUrl] = useState<string>("");
    const handleChange=(e:any)=>{
        console.log(111,e.target.files[0]);
        setImage(e.target.files[0]);
    }
    const saveImage= async ()=>{
        const formData= new FormData();
        formData.append("file",image);
        formData.append("upload_preset",import.meta.env.VITE_PROJECT_NAME);
        formData.append("cloud_name",import.meta.env.VITE_CLOUD_NAME);
        try {
            const response = await axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`,formData);
            console.log("kết quả trả về:",response);
            setUrl(response.data.url)
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
      <h1> Tải ảnh lên cloudinary</h1>
      <input type="file" onChange={handleChange} />
      <button onClick={saveImage}>lưu</button>
      <p>ảnh sau khi được up load</p>
      <img src={url} alt="" />
    </div>
  )
}
