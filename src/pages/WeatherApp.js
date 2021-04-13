import { useHistory } from "react-router-dom";

import introductionImg from "../img/project-vue/weather_home.png";
import firstBlock from "../img/project-vue/weather_data.png";

const WeatherApp = () => {
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
        <h1>Weather App</h1>

        <div className="introduction-details">
          <h5>Personal Project</h5>
          <a
            href="https://github.com/damienesp/weather-app"
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
            href="https://damiesp-weather.netlify.app/"
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
          The Weather App was build after I learned the basics of Javascript. It
          was a good exercice combining HTML, CSS and Javascript together. I
          used OpenWeatherMap API to collect the weather data.
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
            The main purpose was to improve my comprehension of Javascript, DOM
            manipulation and catching sets of data with an API under a
            minimalistic interface. Weather data is displayed based on the
            location input with additional informations like the local time. I
            also spent time on best practices for each tools I used. Aside from
            this, it was an exercice to make weather icons with Adobe
            Illustrator.
          </p>

          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            width="24"
            className="first-html"
          >
            <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path>
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
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="28"
            className="first-js"
          >
            <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"></path>
          </svg>
        </div>
      </div>

      <div className="second-block">
        <div className="second-img-block">
          <img
            className="second-img"
            src={firstBlock}
            alt="Mauvie list page"
          ></img>
        </div>

        <div className="second-paragraph">
          <h2>Future improvements</h2>
          <p>
            In the future, I would like to draw background illustrations based
            on the weather and local time, in addition to more precise weather
            data like a 7 days forecast.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
