import { useHistory } from "react-router-dom";

import introductionImg from "../img/project-vue/mauvie_home.png";
import firstBlock from "../img/project-vue/mauvie_movie.png";
import secondBlock from "../img/project-vue/mauvie_top.png";

const Mauvie = () => {
  const history = useHistory();
  const handleBack = () => {
    history.goBack();
  };

  return (
    <div className="project-wrapper">
      <div className="go-back">
        <button onClick={handleBack}>‹ Go back</button>
      </div>

      <div className="project-introduction">
        <h1>Mauvie</h1>

        <div className="introduction-details">
          <h5>Personal project</h5>
          <a
            href="https://github.com/damienesp/movie-library"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32.6 31.8"
              width="21.6"
              className="project-github"
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
          <a
            href="https://github.com/damienesp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="20"
              className="project-live"
            >
              <path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z" />
            </svg>
          </a>
        </div>

        <p>
          Mauvie is a project that allows users to search, get informations and
          recommendations on thousands of movies using the TMDb API.
        </p>

        <img
          className="introduction-img"
          src={introductionImg}
          alt="Mauvie home page"
        ></img>
      </div>

      <div className="first-block">
        <div className="first-paragraph">
          <h2>Project purposes</h2>

          <p>
            The main purpose of the application was to use API data to display
            informations about movies along with a search tool. I chose to use
            React because of its ability to manipulate states without having to
            re-render the pages and go deeper in the framework. The project
            helped me to practice React and React Hooks.
          </p>

          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="32"
            className="first-react"
          >
            <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path>
          </svg>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            width="24"
            className="first-css"
          >
            <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"></path>
          </svg>
        </div>

        <div className="first-img-block">
          <img
            className="first-img"
            src={firstBlock}
            alt="Mauvie movie page"
          ></img>
        </div>
      </div>

      <div className="second-block">
        <div className="second-img-block">
          <img
            className="second-img"
            src={secondBlock}
            alt="Mauvie list page"
          ></img>
        </div>

        <div className="second-paragraph">
          <h2>Problems and thought process</h2>
          <p>
            I encountered few bumps along the way. One was how to deal with
            state management and passing props to independent and reusable
            components. Research led me to pass data between pages via the URL
            with query string and React Router. I was able to get the
            informations I needed for each component and update my states
            accordingly without passing props from the top.
          </p>
          <h2>Future improvements</h2>
          <p>
            I would like to redesign the entire project, to make it more
            user-friendly and not just functional. I would also like to add a
            function for searching movies by genre and a watchlist with
            authentification.
          </p>
        </div>
      </div>

      <div className="third-block">
        <h2>Lessons Learned</h2>
        <p>
          This app helped me to consolidate my React knowledge, and go deeper
          with Hooks. In addition, I got a lot of practice using Javascript ES6
          syntax across the project.  I learned how to search informations to
          solve my problems and understand documentation from technologies I
          never used before. All this to be able to choose the most suitable
          tool for my problem and his complexity. More generally, this larger
          project helped me to organize and structure my code and how important
          maintaining organisation is.
        </p>
      </div>
    </div>
  );
};

export default Mauvie;
