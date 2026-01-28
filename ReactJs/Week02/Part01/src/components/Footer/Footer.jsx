import "./Footer.css";

const Footer = ({ text, author, year }) => {
  return (
    <footer className="footer">
      <p>{text}</p>
      <p>{author && `© ${year || new Date().getFullYear()} ${author}`}</p>
    </footer>
  );
};

export default Footer;
