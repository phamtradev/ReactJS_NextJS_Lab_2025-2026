import "./StudentInfo.css";

const StudentInfo = ({ hoTen, mssv, lop }) => {
  const getInitials = (name) => {
    if (!name) return "?";
    const words = name.trim().split(" ");
    if (words.length === 1) return words[0].charAt(0).toUpperCase();
    return (
      words[0].charAt(0).toUpperCase() +
      words[words.length - 1].charAt(0).toUpperCase()
    );
  };

  return (
    <div className="student-info">
      <div className="avatar">
        <div className="avatar-circle">{getInitials(hoTen)}</div>
      </div>
      <h2>Thông Tin Sinh Viên</h2>
      <div className="info-item">
        <span className="info-label">Họ và tên:</span>
        <span className="info-value">{hoTen}</span>
      </div>
      <div className="info-item">
        <span className="info-label">MSSV:</span>
        <span className="info-value">{mssv}</span>
      </div>
      <div className="info-item">
        <span className="info-label">Lớp:</span>
        <span className="info-value">{lop}</span>
      </div>
    </div>
  );
};

export default StudentInfo;
