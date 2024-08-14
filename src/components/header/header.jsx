import React from "react";
import "./header.css";

function header() {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>
          order your <br /> favorite food here
        </h2>
        <p>
          Choose from a diverse menu featuring a detectable array of dishes
          crafted with the finest ingridents and culinary expertise . Our
          missino is to satsfy your cravings and elevate your dining experience
          . one delicious meal at a time.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
}

export default header;
