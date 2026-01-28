import { useState } from "react";
import "./UserForm.css";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="form-container">
      <h1>Form Nhập Liệu</h1>

      <div className="form-group">
        <label>Tên:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nhập tên của bạn"
        />
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Nhập email của bạn"
        />
      </div>

      <div className="display-data">
        <h2>Thông Tin Đã Nhập</h2>
        <p>
          <strong>Tên:</strong> {name || "(Chưa nhập)"}
        </p>
        <p>
          <strong>Email:</strong> {email || "(Chưa nhập)"}
        </p>
      </div>
    </div>
  );
};

export default UserForm;
