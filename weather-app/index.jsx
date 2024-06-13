import { useEffect, useState } from "react";
import "../styles.css";

function Search({search, setSearch}) {
  return <div className="search-engine">
    <input className="search-input" type="text" placeholder="City name" value={search} onChagne={(event)=>setSearch(event.target.value)}/>
    <button className="search-button">Search</button>
  </div>;
}

export default function WeatherApp() {
  const [search, setSearch] = useState('');

  return <div>
    <Search search={search} setSearch={setSearch}/>
  </div>;
}
