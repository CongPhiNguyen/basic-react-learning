import React from "react";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiY29uZ3BoaW5ndXllbjMxMiIsImEiOiJjbDZkY2tpc2cwN3NjM2xvMmR6dHgzbGllIn0.E4b1V_nesk8kTHtKllibNg";
function Maps() {
  return (
    <div>
      <Map
        mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>
  );
}

export default Maps;
