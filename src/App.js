import React, { useState, useEffect } from "react";

import photo1 from "./images/chuttersnap-8I423fRMwjM-unsplash.jpg";
import fwd from "./images/fwd.png";
import back from "./images/back.png";

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [bgIMG, setBgIMG] = useState("");
  let urls = [];
  for (let i = 0; i < 3; i++) {
    urls.push("https://source.unsplash.com/random/");
  }
  useEffect(() => {
    const response = Promise.all(
      urls.map((url, i) =>
        fetch(url + i)
          .then((data) => {
            setPhotos((state) => [...state, data.url]);
          })
          .catch((error) => {
            console.log(error);
          })
      )
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://source.unsplash.com/random//1600x900/?${query}`).then(
      (data) => {
        setBgIMG(data.url);
      }
    );
  };

  return (
    <div className="container">
      <div className="overlay">
        <div className="prev">
          <img src={back} alt="" />
        </div>
        <div className="next">
          <img src={fwd} alt="" />
        </div>
      </div>
      <div className="heading">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={"Background"}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div>
      <div className="content">
        {photos.map((item) => (
          <img src={item} key={item.id} alt={item.id} width="70%" />
        ))}
      </div>
      <div className="footing">
        <p>Life's over</p>
      </div>
      <div
        className="photo"
        style={{
          backgroundImage: `url(${!bgIMG ? photo1 : bgIMG})`,
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
}

export default App;
