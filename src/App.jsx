import "./App.css";
import { useState } from "react";
import React from "react";
import 

const App = () => {
  const [data, setData] = useState({});
  cosnt[(location, setLocation)] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=4e2d9fc84c04b4e67760b3f99b7bd95d`;

  const searchEvent = (event) => {

    if(event.key === "Enter"){

    }
  };

  return (
    <div className="app">
      <h2 style={{ textAlign: "center", color: "#00000" }}>
        <span>Weather</span> Forecast
      </h2>
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.location)}
         onKeyDown={searchEvent}
          placeholder="Enter Location"
          type="text"
        />
      </div>

      <div className="container">
        <div className="top">
          <div className="location">
            <p>Pak</p>
          </div>

          <div className="temp">
            <p>Degree C</p>
          </div>
        </div>
        <div className="description">
          <p>Main</p>
        </div>
      </div>
    </div>
  );
};

export default App;
