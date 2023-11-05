import styled from "styled-components";
import MenuHeaderTemplate from "./menu/MenuHeader";

const Container = styled.div`
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  padding: 15px;
  font-family: "Playpen Sans", "cursive";
  background-color: transparent;
  border-bottom: 1px solid;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: fit-content;
  border: none;
  padding: 15px 20px;
  background-color: #fff;
  font-family: "Playpen Sans", "cursive";
  margin: 0 auto;
  cursor: pointer;
  &:active {
    transform: scale(0.9);
  }
`;

const Reservation = () => {
  return (
    <Container>
      <MenuHeaderTemplate title="reservation" />
      <Form>
        <Input placeholder="Name" />
        <Input placeholder="Last Name" />
        <Input placeholder="Number of persons" />
        <Input placeholder="Day => includes week's days" />
        <Input placeholder="Hour => from 09:30 to 23:30" />
        <Button>Make Reservation</Button>
      </Form>
    </Container>
  );
};

export default Reservation;
