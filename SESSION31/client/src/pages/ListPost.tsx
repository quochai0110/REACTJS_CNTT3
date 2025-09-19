import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

interface Post {
  id?: number;
  title: string;
  image: string;
  date: string;
  status: boolean;
  content: string;
}

export default function ListPost() {
  const [show, setShow] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [post, setPost] = useState<Post>({
    title: "",
    image: "",
    date:
      new Date().getDate().toString() +
      "/" +
      (new Date().getMonth() + 1).toString() +
      "/" +
      new Date().getFullYear().toString(),
    status: false,
    content: "",
  });

  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleClose = () => {
    setShow(false);
    setPost({
      title: "",
      image: "",
      date:
        new Date().getDate().toString() +
        "/" +
        (new Date().getMonth() + 1).toString() +
        "/" +
        new Date().getFullYear().toString(),
      status: false,
      content: "",
    });
  };
  const handleShow = () => setShow(true);

  const getAllPost = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/posts`);
      setPosts([...response.data]);
    } catch (error) {
      console.log("err", error);
    }
  };

  useEffect(() => {
    getAllPost();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSave = async () => {
    try {
      if (post.id) {
        // Cập nhật bài viết
        await axios.put(`http://localhost:8080/posts/${post.id}`, post);
      } else {
        // Thêm bài viết mới
        await axios.post(`http://localhost:8080/posts`, post);
      }
      setShow(false);
      getAllPost();
    } catch (error) {
      console.log("err", error);
    }
  };

  const deletePost = async (id: number) => {
    let confirmDelete = confirm("Bạn có chắc chắn muốn xóa không?");
    if (confirmDelete) {
      await axios.delete(`http://localhost:8080/posts/${id}`);
      setPosts(posts.filter((item) => item.id !== id));
    }
  };

  const handleEdit = (postToEdit: Post) => {
    setPost(postToEdit);
    setShow(true);
  };




  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <input
        type="text"
        placeholder="Nhập từ khóa tìm kiếm"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select name="" id="">
        <option value="">Lọc bài viết</option>
        <option value="">Đã xuất bản</option>
        <option value="">Chưa xuất bản</option>
      </select>
      <Button variant="primary" onClick={handleShow}>
        Thêm bài viết
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{post.id ? "Sửa bài viết" : "Thêm mới bài viết"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tên bài viết</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                autoFocus
                onChange={handleChange}
                name="title"
                value={post.title}
              />
              <Form.Label>Hình ảnh bài viết</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                autoFocus
                onChange={handleChange}
                name="image"
                value={post.image}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Nội dung bài viết</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={handleChange}
                name="content"
                value={post.content}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            {post.id ? "Cập nhật" : "Lưu Thay Đổi"}
          </Button>
        </Modal.Footer>
      </Modal>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>TIÊU ĐỀ</th>
            <th>HÌNH ẢNH</th>
            <th>NGÀY VIẾT</th>
            <th>TRẠNG THÁI</th>
            <th>NỘI DUNG</th>
            <th>CHỨC NĂNG</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item: Post, index: number) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.image}</td>
              <td>{item.date}</td>
              <td>{item.status ? "Đã xuất bản" : "Chưa xuất bản"}</td>
              <td>{item.content}</td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(item)}>
                  Sửa
                </Button>
                <Button variant="danger" onClick={() => deletePost(item.id!)}>
                  Xóa
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
