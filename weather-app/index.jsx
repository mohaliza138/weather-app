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


  async function getWeatherData(search) {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=82a5cb665215c764d3a858b79f012ff9`);

      const data = await res.json();
    } catch (e) {
      console.log(e);
    }
  }

  async function startSearch() {}

  return <div>
    <Search search={search} setSearch={setSearch} startSearch={startSearch}/>
  </div>;
}
