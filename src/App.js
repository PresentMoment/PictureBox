import React from "react";

import photo1 from "./images/chuttersnap-8I423fRMwjM-unsplash.jpg";
import photo2 from "./images/chuttersnap-gDDas5_ALRw-unsplash.jpg";
import photo3 from "./images/daria-lisovtsova-oNXK1F8cVaE-unsplash.jpg";

function App() {
  return (
    <div className="container">
      <div className="overlay" />
      <div className="heading">
        <p>Life's work</p>
      </div>
      <div className="content">
        <h1>some content</h1>
      </div>
      <div className="footing">
        <p>Life's over</p>
      </div>
      <div
        className="photo"
        style={{ backgroundImage: `url(${photo1})`, backgroundSize: "cover" }}
      ></div>
    </div>
  );
}

export default App;
