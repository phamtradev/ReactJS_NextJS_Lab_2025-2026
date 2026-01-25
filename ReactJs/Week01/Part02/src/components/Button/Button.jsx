import "./Button.css";
//ok
const Button = ({ type, children }) => {
  return <button className={`btn btn-${type}`}>{children}</button>;
};

export default Button;
