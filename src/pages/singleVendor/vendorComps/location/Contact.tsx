import styled from "styled-components";
import { useAppSelector } from "../../../../redux/hook";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContanctHeader = styled.h1`
  text-transform: uppercase;
  color: #8c8c8c;
  border-bottom: 1px solid;
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Item = styled.span`
  text-transform: uppercase;
  color: #8c8c8c;
  border-bottom: 1px solid;
`;
const Contact = () => {
  const { vendorById } = useAppSelector((state) => state.vendor);
  return (
    <Container>
      <ContactWrapper>
        <ContanctHeader>contact</ContanctHeader>
        <ItemWrapper>
          <Item>phone</Item>
          <Item>{vendorById?.phone}</Item>
        </ItemWrapper>
        <ItemWrapper>
          <Item>address</Item>
          <Item>{vendorById?.address}</Item>
        </ItemWrapper>
        <ItemWrapper>
          <Item>Email</Item>
          <Item>{vendorById?.email}</Item>
        </ItemWrapper>
      </ContactWrapper>
      <ContactWrapper>
        <ContanctHeader>Openning hours</ContanctHeader>
        <ItemWrapper>
          <Item>monday-friday</Item>
          <Item>09:30 am - 23:30 pm</Item>
        </ItemWrapper>
      </ContactWrapper>
    </Container>
  );
};

export default Contact;
