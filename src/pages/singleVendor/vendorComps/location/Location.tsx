import { FC, useState } from "react";
import styled from "styled-components";
import Contact from "./Contact";
import { useAppSelector } from "../../../../redux/hook";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Libraries,
  InfoWindow,
} from "@react-google-maps/api";
import VendorInfoForMarker, { VendorInfo } from "./VendorInfoForMarker";
import { mobileDevice } from "../../../../responsive";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
  gap: 15px;
  ${mobileDevice({
    flexDirection: "column",
    gap: "15px",
    height: "100vh",
  })}
`;

const ContactWrapper = styled.div`
  flex: 1;
`;
const MapWrapper = styled.div`
  flex: 1;
  height: 100%;
  border-radius: 15px;
  box-shadow: 0 0 10.5px rgba(0, 0, 0, 0.35);
  ${mobileDevice({
    height: "100vh",
    width: "100%",
  })}
`;

const googleMapApiKey: string | undefined =
  process.env["REACT_APP_GOOGLE_CLOUD_KEY"];
const googleMapLibraries: Libraries = ["places"];

const Location: FC = () => {
  const { vendorById } = useAppSelector((state) => state.vendor);
  const [isIntoWindow, setIsIntoWindow] = useState(false);
  if (!googleMapApiKey) {
    throw new Error(
      "Google Cloud API key is not defined in environment variables"
    );
  }

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: googleMapApiKey,
    libraries: googleMapLibraries,
  });

  const lng = vendorById ? parseFloat(vendorById.lng) : null;
  const lat = vendorById ? parseFloat(vendorById.lat) : null;

  if (lng === null || lat === null) return null;
  const center = {
    lng,
    lat,
  };

  if (!isLoaded) {
    return <>Loading...</>;
  }

  const toggleIntoWindow = () => {
    setIsIntoWindow(!isIntoWindow);
  };

  const vendorInfo: VendorInfo = {
    coverImage: vendorById?.coverImage || null,
    name: vendorById?.name || null,
    email: vendorById?.email || null,
    phone: vendorById?.phone || null,
    rating: vendorById?.rating || null,
  };
  return (
    <Container>
      <ContactWrapper>
        <Contact />
      </ContactWrapper>
      <MapWrapper>
        <GoogleMap
          center={center}
          zoom={15}
          options={{
            streetViewControl: false,
          }}
          mapContainerStyle={{
            width: "100%",
            height: "100%",
            borderRadius: "15px",
          }}
        >
          <Marker position={center} onClick={toggleIntoWindow}>
            {isIntoWindow && (
              <InfoWindow onCloseClick={toggleIntoWindow}>
                <VendorInfoForMarker vendor={vendorInfo} />
              </InfoWindow>
            )}
          </Marker>
        </GoogleMap>
      </MapWrapper>
    </Container>
  );
};

export default Location;
