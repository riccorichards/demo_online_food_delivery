import styled from "styled-components";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
  Libraries,
} from "@react-google-maps/api";
import React, { useRef, useState } from "react";
import { useAppSelector } from "../../redux/hook";
import { Divider } from "@mui/material";
import { mobileDevice } from "../../responsive";

const Container = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  gap: 10px;
  position: relative;
  ${mobileDevice({
    position: "static",
    display: "flex",
    flexDirection: "column",
    height: "155vh",
    padding: "15px 0",
  })}
`;

const NavBar = styled.div`
  position: absolute;
  width: 30%;
  height: 65vh;
  top: 10%;
  left: 1%;
  border-radius: 15px;
  background-color: #ffffffce;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 15px;
  z-index: 999;
  box-shadow: 0 0 5.5px rgba(0, 0, 0, 0.35);
  ${mobileDevice({
    position: "static",
    width: "calc(100% - 30px)",
  })}
`;

const StyleNavButton = styled.div`
  cursor: pointer;
  font-size: 14px;
  box-shadow: 0 0 5.5px rgba(0, 0, 0, 0.35);
  width: fit-content;
  padding: 5px;
  border-radius: 5px;
  transition: all 0.25s ease-in-out;
  align-self: last baseline;

  &:hover {
    background-color: orangered;
    color: #fff;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

const Input = styled.input`
  border-radius: 15px;
  width: calc(100% - 15px);
  border: none;
  padding: 7px;
  box-shadow: 0 0 5.5px rgba(0, 0, 0, 0.35);
  font-family: "Playpen Sans", "cursive";

  &:focus {
    outline: none;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const CalcButton = styled.button`
  background-color: #032f05;
  color: #fff;
  padding: 5px;
  width: fit-content;
  font-family: "Playpen Sans", "cursive";
  box-shadow: 0 0 5.5px rgba(0, 0, 0, 0.35);
  border-radius: 5px;
  border: none;
`;
const ResetButton = styled.button`
  background-color: orangered;
  padding: 5px;
  color: #fff;
  width: fit-content;
  font-family: "Playpen Sans", "cursive";
  box-shadow: 0 0 5.5px rgba(0, 0, 0, 0.35);
  border-radius: 5px;
  border: none;
`;

const DestInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-evenly;
`;

const CartPlace = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 45vh;
  overflow-y: auto;
`;

const CartItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
`;

const MapWrapper = styled.div`
  flex: 4;
  border-radius: 15px;
  box-shadow: 0 0 10.5px rgba(0, 0, 0, 0.35);
`;
const googleMapApiKey = process.env["REACT_APP_GOOGLE_CLOUD_KEY"];
const center = { lng: 44.790996836, lat: 41.706163842 };

const googleMapLibraries: Libraries = ["places"];
const vendorDemoAddress = "გოცირიძე, Tbilisi, Georgia";

const GoogleMapApi = () => {
  const { cart, orderInfo } = useAppSelector((state) => state.cart);
  if (!googleMapApiKey) {
    throw new Error(
      "Google Cloud API key is not defined in environment variables"
    );
  }

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: googleMapApiKey,
    libraries: googleMapLibraries,
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [directionResponse, setDirectionResponse] =
    useState<google.maps.DirectionsResult | null>(null);
  const [distance, setDistance] = useState<string | null>(null);
  const [duration, setDuration] = useState<string | null>(null);

  const toRef = useRef<HTMLInputElement>(null);
  const fromRef = useRef<HTMLInputElement>(null);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  const directionService = new google.maps.DirectionsService();

  const CulculateRirection = async () => {
    try {
      if (!toRef.current?.value || !fromRef.current?.value) {
        return;
      }

      if (!directionService) {
        console.log("Direction Service APIs is not loaded yet...");
        return;
      }
      const result = await directionService.route({
        origin: toRef.current.value,
        destination: fromRef.current.value,
        travelMode: google.maps.TravelMode.DRIVING,
      });

      setDirectionResponse(result);
      setDistance(result.routes[0].legs[0].distance?.text || null);
      setDuration(result.routes[0].legs[0].duration?.text || null);
    } catch (error: any) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("An unknown error occurred");
      }
    }
  };

  const reset = () => {
    setDirectionResponse(null);
    setDistance("");
    setDuration("");
    if (toRef.current !== null) {
      toRef.current.value = "";
    }

    if (fromRef.current !== null) {
      fromRef.current.value = "";
    }
  };
  return (
    <Container>
      <NavBar>
        <Form>
          <Autocomplete>
            <Input
              placeholder="your address"
              type="text"
              value={vendorDemoAddress}
              ref={toRef}
            />
          </Autocomplete>
          <Autocomplete>
            <Input
              placeholder="your destination"
              type="text"
              value={orderInfo?.address}
              ref={fromRef}
            />
          </Autocomplete>
        </Form>
        <ButtonsWrapper>
          <CalcButton onClick={CulculateRirection}>Culculate</CalcButton>
          <ResetButton onClick={reset}>Reset</ResetButton>
        </ButtonsWrapper>
        <DestInfo>
          <h4 style={{ margin: "0" }}>Distance: {distance}</h4>
          <h4 style={{ margin: "0" }}>Duration: {duration}</h4>
        </DestInfo>
        <Divider />
        <CartPlace>
          {cart &&
            cart.map((item) => (
              <React.Fragment key={item._id}>
                <CartItemWrapper>
                  <Image src={item.food.images} />
                  <DetailsWrapper>
                    <p style={{ margin: "0" }}>{item.food.name}</p>
                    <p style={{ margin: "0" }}>{item.food.price}</p>
                  </DetailsWrapper>
                </CartItemWrapper>
                <Divider />
              </React.Fragment>
            ))}
        </CartPlace>
        <StyleNavButton onClick={() => map?.panTo(center)}>
          Return Me At Center
        </StyleNavButton>
      </NavBar>
      <MapWrapper>
        <GoogleMap
          center={center}
          zoom={13}
          mapContainerStyle={{
            width: "100%",
            height: "100%",
            borderRadius: "15px",
          }}
          onLoad={(map) => setMap(map)}
          options={{
            streetViewControl: false,
          }}
        >
          <Marker position={center} />
          {directionResponse && (
            <DirectionsRenderer directions={directionResponse} />
          )}
        </GoogleMap>
      </MapWrapper>
    </Container>
  );
};

export default GoogleMapApi;
