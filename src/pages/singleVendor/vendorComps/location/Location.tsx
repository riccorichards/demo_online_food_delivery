import "mapbox-gl/dist/mapbox-gl.css";
import { FC, useEffect, useRef } from "react";
import styled from "styled-components";
import mapboxgl from "mapbox-gl";
import { AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai";
import Contact from "./Contact";
import { useAppSelector } from "../../../../redux/hook";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
  gap: 15px;
`;

const ContactWrapper = styled.div`
  flex: 1;
`;
const MapWrapper = styled.div`
  flex: 1;
  height: 100%;
  border-radius: 15px;
  box-shadow: 0 0 10.5px rgba(0, 0, 0, 0.35);
`;

const ControllerWapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 2%;
  right: 2%;
  gap: 5px;
  z-index: 999;
`;
const Controller = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 18px;
  padding: 5px;
  border: none;
  background-color: #fff;
  color: #032f05;
  cursor: pointer;
`;

const Location: FC = () => {
  const TOKEN = process.env["REACT_APP_MAPBOX_PUBLIC_KEY"];
  const mapContainer = useRef<HTMLDivElement | null>(null);
  let map = useRef<mapboxgl.Map | null>(null);
  const { vendorById } = useAppSelector((state) => state.vendor);

  const lng = vendorById && vendorById.lng;
  const lat = vendorById && vendorById.lat;

  useEffect(() => {
    const container = mapContainer.current;

    if (container) {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    }
    if (lng && lat) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current!,
        center: [parseFloat(lng), parseFloat(lat)],
        style: "mapbox://styles/riccorichards/cloizlwqv005k01qmgy13e7p3",
        accessToken: TOKEN,
        zoom: 14,
      });
      new mapboxgl.Marker({
        color: "orange",
        rotation: 45,
      })
        .setLngLat([parseFloat(lng), parseFloat(lat)])
        .addTo(map.current);
    }
    return () => map.current?.remove();
  }, [TOKEN, lat, lng]);

  const handleZoomIn = () => {
    if (map.current) map.current.zoomIn();
  };

  const handleZoomOut = () => {
    if (map.current) map.current.zoomOut();
  };

  return (
    <Container>
      <ContactWrapper>
        <Contact />
      </ContactWrapper>
      <MapWrapper ref={mapContainer}>
        <ControllerWapper>
          <Controller onClick={handleZoomIn}>
            <AiOutlineZoomIn />
          </Controller>
          <Controller onClick={handleZoomOut}>
            <AiOutlineZoomOut />
          </Controller>
        </ControllerWapper>
      </MapWrapper>
    </Container>
  );
};

export default Location;