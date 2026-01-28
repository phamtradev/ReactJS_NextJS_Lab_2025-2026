import { useState } from "react";
import "./UserForm.css";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="form-container">
      <h1>Form Thông Tin Người Dùng</h1>

      <form className="user-form">
        <div className="form-group">
          <label>Tên:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nhập tên"
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Nhập email"
          />
        </div>

        <div className="form-group">
          <label>Tuổi:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Nhập tuổi"
          />
        </div>
      </form>

      <div className="display-info">
        <h2>Thông Tin</h2>
        <p>
          <strong>Tên:</strong> {formData.name || "(Chưa nhập)"}
        </p>
        <p>
          <strong>Email:</strong> {formData.email || "(Chưa nhập)"}
        </p>
        <p>
          <strong>Tuổi:</strong> {formData.age || "(Chưa nhập)"}
        </p>
      </div>
    </div>
  );
};

export default UserForm;
