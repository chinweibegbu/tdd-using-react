import React from "react";
import "./Map.css";

function Map({imageName}) {  
  return (
    <div className="MapBox" data-testid="Map">
      <img src={'images/'+imageName} alt={imageName} />
    </div>
  );
}

export default Map;