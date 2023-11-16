import styled from "styled-components";
import { GoogleMapsProvider } from "@ubilabs/google-maps-react-hooks";
import {
  MarkerClusterer,
  SuperClusterAlgorithm,
} from "@googlemaps/markerclusterer";
import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { ListOfVendorsType, getVendors } from "../../redux/ApiCall";

const MapWrapper = styled.div`
  margin-top: 150px;
  height: 90vh;
  border-radius: 15px;
  box-shadow: 0 0 10.5px rgba(0, 0, 0, 0.15);
`;
const API_KEY = process.env.REACT_APP_GOOGLE_CLOUD_KEY;
const options = {
  zoom: 13,
  center: { lng: 44.790996836, lat: 41.706163842 },
  streetViewControl: false,
};
const MapClusters = () => {
  if (!API_KEY) {
    throw new Error(
      "Google Cloud API key is not defined in environment variables"
    );
  }
  const [mapContainer, setMapContainer] = useState<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();
  const { vendors } = useAppSelector((state) => state.vendor);
  useEffect(() => {
    try {
      dispatch(getVendors());
    } catch (error: any) {
      throw new Error(error.message);
    }
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  const onLoad = useCallback(
    (map: google.maps.Map) => addMarkers(map, vendors || []),
    [vendors]
  );

  return (
    <GoogleMapsProvider
      googleMapsAPIKey={API_KEY}
      mapOptions={options}
      mapContainer={mapContainer}
      onLoadMap={onLoad}
    >
      <MapWrapper ref={(node) => setMapContainer(node)} />
    </GoogleMapsProvider>
  );
};

export default MapClusters;

const addMarkers = (map: google.maps.Map, vendors: ListOfVendorsType[]) => {
  const infoWindow = new google.maps.InfoWindow();
  if (vendors) {
    const markers = vendors
      .map(({ name, lat, lng, coverImage, email, phone, rating }) => {
        const LAT = parseFloat(lat);
        const LNG = parseFloat(lng);

        if (!isNaN(LNG) && !isNaN(LAT)) {
          const marker = new google.maps.Marker({
            position: { lat: LAT, lng: LNG },
            map,
          });

          marker.addListener("click", () => {
            infoWindow.setPosition({ lat: LAT, lng: LNG });
            infoWindow.setContent(`<div style={{display: "flex", flexDirection:"column", padding: "5px"}}>
						<img src=${coverImage} alt="vendorName" style={{width: "50px", heigth: "50px", object-fit: "cover"}}/>
						<h4 style={{margin: "0"}}>Restaurant: ${name}</h4>
						<p style={{margin: "0"}}>Email: ${email}</p>
						<p style={{margin: "0"}}>Phone: ${phone}</p>
						<p style={{margin: "0"}}>Rating: ${(parseFloat(rating) / 338).toFixed(2)}</p>
						</div>`);
            infoWindow.open({ map });
          });

          return marker;
        }

        return undefined;
      })
      .filter(
        (marker): marker is google.maps.Marker => marker !== undefined
      ) as google.maps.Marker[];

    new MarkerClusterer({
      markers,
      map,
      algorithm: new SuperClusterAlgorithm({ radius: 0 }),
    });
  }
};
