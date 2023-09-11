import React from "react";
import "./Button.css";

function Button ({handleClick, location}) {
  return (
    <button className="location-button" value={location ? location : 'None'} onClick={handleClick}>{location ? location : "All Locations"}</button>
  );
}
 
export default Button;