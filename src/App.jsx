import "./App.css";
import { useState } from "react";
import React from "react";
import axios from "axios";
import weatherImages from "./assets/data.jsx";

const App = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=4e2d9fc84c04b4e67760b3f99b7bd95d`;

  const searchEvent = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  let ruff;
  let round;

  if (data.main !== undefined) {
    ruff = data.main.temp;
    round = (Math.round(ruff - 32) * 5) / 9;
  }

  let rfeel;
  let rround;
  if (data.main !== undefined) {
    rfeel = data.main.feels_like;
    rround = (Math.round(rfeel - 32) * 5) / 9;
  }

  let weatherType = data.weather ? data.weather[0].main : "Loading...";
  let weatherImage = weatherImages[weatherType] || weatherImages["Clear"]; // Default to "clear" if no match

  console.log(weatherType);
  return (
    <div className="app">
      <h2>
        <span>Weather</span> Forecast
      </h2>
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchEvent}
          placeholder="Enter Location"
          type="text"
        />
      </div>

      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>

          <div className="temp">
            {data.main ? (
              <>
                <div>
                  <h1>{round.toFixed(0)}°C</h1>
                </div>
                <div>
                  <img className="img" src={weatherImage} alt="weather Image" />
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
      <div className="description">
        {data.weather ? <p>{data.weather[0].description}</p> : null}
      </div>

      {data.name !== undefined ? (
        <div className="bottom">
          <div className="feels">
            {data.main ? <p>{rround.toFixed(0)} °C</p> : "-"}

            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p>{data.main.humidity}</p> : "-"}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.main ? <p>{data.wind.speed}</p> : "-"}
            <p>Wind Speed</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default App;
