import "./Alert.css";

const Alert = ({ type, message }) => {
  if (!type) return null;
  return (
    <>
      <div className={`alert alert-${type}`}>{message}</div>
    </>
  );
};

export default Alert;
