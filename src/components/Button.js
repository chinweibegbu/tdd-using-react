import React from "react";
import "./Button.css";

function Button ({location}) {
  return (
    <button className="location-button">{location ? location : "All Locations"}</button>
  );
}
 
export default Button;