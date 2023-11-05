import styled from "styled-components";
import Intro from "./vendorComps/Intro/Intro";
import AboutVendor from "./vendorComps/AboutVendor";
import Menu from "./vendorComps/menu/Menu";
import Reservation from "./vendorComps/Reservation";
import Location from "./vendorComps/location/Location";

const Container = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 25px 0;
`;

const SingleVendor = () => {
  return (
    <Container>
      <Intro />
      <AboutVendor />
      <Menu />
      <Reservation />
      <Location />
    </Container>
  );
};

export default SingleVendor;
