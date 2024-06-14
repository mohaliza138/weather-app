import { useEffect, useState } from "react";
import "../styles.css";

function Search({search, setSearch, startSearch}) {
  return <div className="search-engine">
    <input className="search-input" type="text" placeholder="City name" value={search} onChagne={(event)=>setSearch(event.target.value)}/>
    <button className="search-button" onClick={startSearch}>Search</button>
  </div>;
}

export default function WeatherApp() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [wData, setWData] = useState(null);

  async function getWeatherData(search) {

    setLoading = true;

    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=...`);

      const data = await res.json();
      if(data) {
        setLoading = false;
        setWData = data;
      }
    } catch (e) {
      setLoading = false;
      console.log(e);
    }
  }

  async function startSearch() {
    getWeatherData(search);
  }

  return <div>
    <Search search={search} setSearch={setSearch} startSearch={startSearch}/>
    {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div>
          <div className="city">
            <h2>
              {weatherData?.name}
            </h2>
          </div>
          <div className="temp">{weatherData?.main?.temp}</div>
          <p className="description">
            {weatherData && weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].description : ""}
          </p>
          <div className="info">
            <div className="col">
              <div>
                <p>Wind Speed</p>
                <p>{weatherData?.wind?.speed}</p>
              </div>
            </div>
            <div className="col">
              <div>
                <p>Humidity</p>
                <p>{weatherData?.main?.humidity}%</p>
              </div>
            </div>
          </div>
        </div>
      )}
  </div>;
}
