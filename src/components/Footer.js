import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <h1 className="footer-logo">
        <Link to="home-link" smooth={true} duration={1000}>
          .d
        </Link>
      </h1>
      <div className="footer-social">
        <a
          href="https://github.com/damienesp"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-github"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/damien-espana/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-linkedin"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
};

export default Footer;
