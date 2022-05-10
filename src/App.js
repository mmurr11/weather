import React, { useState } from "react";

const APIContext = React.createContext();

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [apiKey] = useState(API_KEY);
  const [noData, setNoData] = useState("No data");
  const [searchterm, setSearchterm] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState("Unknown location");
  const [weatherIcon, setWeatherIcon] = useState(
    `${process.env.REACT_APP_ICON_URL}10n@2x.png`
  );

  return (
    <APIContext.Provider value={apiKey}>
      <div className="bg-gray-800 ">
        <div className="App">api is {apiKey}</div>;
      </div>
    </APIContext.Provider>
  );
}

export default App;
