const Home = () => {
  return (
    <div className="home-wrapper" id="home-link">
      <h1>
        <span>Hello, my name is Damien. I'm a</span>
        <br />
        <span>
          <span className="web-dev">Web Developer</span> with a passion
        </span>
        <br />
        <span>for Design and Science.</span>
      </h1>
      <div className="home-social">
        <a href="https://github.com/damienesp">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32.6 31.8"
            width="24.6"
            className="home-github"
          >
            <linearGradient id="icon-gradient" x1="0" y1="1">
              <stop offset="0%" stopColor="#a1c4fd" />
              <stop offset="100%" stopColor="#c2e9fb" />
            </linearGradient>
            <path
              d="M32.6,16.3c0,7.2-4.7,13.3-11.1,15.5c-0.8,0.2-1.1-0.3-1.1-0.8c0-0.5,0-2.3,0-4.5c0-1.5-0.5-2.5-1.1-3
	c3.6-0.4,7.4-1.8,7.4-8c0-1.8-0.6-3.2-1.7-4.4c0.2-0.4,0.7-2.1-0.2-4.3c0,0-1.4-0.4-4.5,1.7c-1.3-0.4-2.7-0.5-4.1-0.5
	c-1.4,0-2.8,0.2-4.1,0.5C9.1,6.3,7.7,6.8,7.7,6.8C6.8,9,7.4,10.7,7.6,11.1c-1,1.1-1.7,2.6-1.7,4.4c0,6.2,3.8,7.6,7.4,8.1
	c-0.5,0.4-0.9,1.1-1,2.2c-0.9,0.4-3.3,1.1-4.7-1.4c0,0-0.9-1.6-2.5-1.7c0,0-1.6,0-0.1,1c0,0,1.1,0.5,1.8,2.4c0,0,1,3.2,5.5,2.2
	c0,1.4,0,2.4,0,2.8c0,0.4-0.3,0.9-1.1,0.8C4.7,29.6,0,23.5,0,16.3C0,7.3,7.3,0,16.3,0C25.3,0,32.6,7.3,32.6,16.3z"
            />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/damien-espana/">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="24"
            className="home-linkedin"
          >
            <linearGradient id="icon-gradient" x1="0" y1="1">
              <stop offset="0%" stopColor="#a1c4fd" />
              <stop offset="100%" stopColor="#c2e9fb" />
            </linearGradient>
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Home;
