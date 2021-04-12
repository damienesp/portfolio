import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navigation = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeClass, setActiveClass] = useState("");
  const [scrolling, setScrolling] = useState(false);

  const handleOnClick = () => {
    if (mobileMenu) {
      setActiveClass("hidden");
    } else setActiveClass("active");

    setMobileMenu(!mobileMenu);
  };

  const changeClass = () => {
    const scrollPosY = window.pageYOffset || document.body.scrollTop;

    if (scrollPosY > 10) {
      setScrolling(true);
    } else if (scrollPosY <= 10) {
      setScrolling(false);
    }
  };

  const hideOverflow = () => {
    const body = document.querySelector("body");
    if (mobileMenu) {
      body.style.overflow = "hidden";
    } else body.style.overflow = "";
  };

  useEffect(() => {
    hideOverflow();
    changeClass();
    window.onscroll = changeClass;
  });

  return (
    <nav className={scrolling ? "nav-scrolling" : null}>
      <div className="nav-wrapper">
        <Link to="home-link" smooth={true} duration={1000}>
          <div className={`logo ${activeClass}`}>
            <span>.</span>damien
          </div>
        </Link>

        <div className="navigation">
          <ul
            className={`nav-links ${activeClass}`}
            onClick={mobileMenu ? handleOnClick : null}
          >
            <li>
              <Link
                activeClass="nav-active"
                to="home-link"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={mobileMenu ? handleOnClick : null}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="nav-active"
                to="about-link"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={mobileMenu ? handleOnClick : null}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="nav-active"
                to="work-link"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={mobileMenu ? handleOnClick : null}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                activeClass="nav-active"
                to="contact-link"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={mobileMenu ? handleOnClick : null}
              >
                Contact
              </Link>
            </li>
          </ul>

          <button
            className={`hamburger ${mobileMenu ? "active" : ""}`}
            onClick={handleOnClick}
          >
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
