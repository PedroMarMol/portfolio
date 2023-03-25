import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const MapChart = () => {

  const desktopProjectionConfig = {
    rotate: [-10.0, -52.0, 0],
    center: [-15, -4],
    scale: 1000
  };

  const mobileProjectionConfig = {
    rotate: [-10.0, -52.0, 0],
    center: [-12, -2],
    scale: 3500
  };

  const isMobile = window.innerWidth <= 480;

  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={isMobile ? mobileProjectionConfig : desktopProjectionConfig}
      style={{width: '100%', height: '100vh'}}
    >
      <Geographies
        geography="../features.json"
        fill="#e5e2e2"
        stroke="#583e23"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-3.60667, 37.18817]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#583e23",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#583e23">
          {"Granada"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;
