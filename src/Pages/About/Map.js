import { React, useMemo } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const Map = () => {
  const center = useMemo(() => ({ lat: 40.639979, lng: 23.02448 }), []);
  const zoom = useMemo(() => (7, []));

  const { isLoaded } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCzbMXHRs_gcPFaFw4_LJlSKb_gR7RgTXc",
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
      <MarkerF position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
