import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";
import { useState, useEffect } from "react";

const projectionConfig = {
  rotate: [-10.0, -52.0, 0],
  center: [-15, -4],
  scale: 900
};

const MapChart = () => {
  const [projection, setProjection] = useState(projectionConfig)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setProjection({
          ...projectionConfig,
          center: [-12, 0],
          scale: 3000
        });
      } else {
        setProjection(projectionConfig);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={projection}
      style={{width: '100%', height: '100%'}}
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
        dx={-15}
        dy={-15}
        connectorProps={{
          stroke: "#583e23",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
        style={{ fontSize: "1.5rem" }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#583e23">
          {"Granada"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;
