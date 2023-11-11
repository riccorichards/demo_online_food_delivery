import styled from "styled-components";
import { useAppSelector } from "../../../redux/hook";
import { capitalize } from "@mui/material";

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 50vh;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  margin-top: 35px;
`;

const AboutInfoWrapper = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const AboutHeader = styled.h2`
  color: #fff;
  text-shadow: 0 0 1.5px black;
`;

const About = styled.p`
  width: 80%;
  text-align: center;
  font-size: 32px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 800;
  text-transform: uppercase;
`;

const AboutVendor = () => {
  const { vendorById } = useAppSelector((state) => state.vendor);
  return (
    <Container>
      <AboutInfoWrapper>
        <AboutHeader>{vendorById && capitalize(vendorById?.name)}</AboutHeader>
        <About>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus in
          minima odit nulla dolorum illo dolore vero, voluptas rerum amet.
          Nostrum fugiat pariatur commodi explicabo porro hic, in repellat quia
          quas aut id molestiae, quod obcaecati quos deleniti et necessitatibus?
          Suscipit delectus architecto consectetur perferendis!
        </About>
      </AboutInfoWrapper>
    </Container>
  );
};

export default AboutVendor;
