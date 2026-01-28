import "./StatusBadge.css";

const StatusBadge = ({ status }) => {
  return (
    <div className={`status-badge ${status}`}>
      <span className="status-text">{status.toUpperCase()}</span>
    </div>
  );
};

export default StatusBadge;
