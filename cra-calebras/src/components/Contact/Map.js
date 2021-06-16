import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken =
    "pk.eyJ1IjoibWVsbG9tYW5kZXNpZ25zIiwiYSI6ImNrcHB0dHBpbDF2ZHoybnJ4dnV0eHpseG0ifQ._UFR5k1C_CUJZZdJi7tMGA";

const Map = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-90.4934649884052);
    const [lat, setLat] = useState(30.07187582202743);
    const [zoom, setZoom] = useState(16);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [lng, lat],
            zoom: zoom
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on("move", () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    );
};

export default Map;
