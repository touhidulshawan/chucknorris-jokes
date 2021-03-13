import { useState, useEffect } from "react";
import "./App.css";
import reload from "./assets/sync-solid.svg";

const App = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    setData(data);
    setIsLoading(false);
  };

  return (
    <div className="container">
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="joke__container">
          <h1 className="joke__title">Chuck Norris</h1>
          <img
            className="joke__avatar"
            src={data.icon_url}
            alt="chuck norris"
          />
          <p className="joke_text">{data.value}</p>
          <button className="reload" onClick={getData}>
            <img src={reload} alt="reload icon" width="20" height="20" />
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
