import styled from "styled-components";

const Container = styled.div`
  margin: 35px 0;
  width: 100%;
  height: 90vh;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ContainerHeader = styled.div``;
const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  width: 80%;
`;
const Input = styled.input`
  padding: 8px 16px;
  width: 100%;
  font-family: "Playpen Sans", "cursive";
  border: none;
  background-color: rgb(220, 222, 224);
  border-radius: 15px;
  letter-spacing: 1.5px;
  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  padding: 8px 16px;
  width: 100%;
  font-family: "Playpen Sans", "cursive";
  border: none;
  background-color: #032f05;
  border-radius: 15px;
  letter-spacing: 1.5px;
  width: fit-content;
  color: #fff;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }
`;

const CreateVendor = () => {
  return (
    <Container>
      <ContainerHeader>Create Vendor</ContainerHeader>
      <Form>
        <Input placeholder="Name" type="text" />
        <Input placeholder="Owner Name" type="text" />
        <Input placeholder="Food Type" type="text" />
        <Input placeholder="Pincode" type="text" />
        <Input placeholder="Address" type="text" />
        <Input placeholder="Phone" type="text" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Input placeholder="Latitude" type="text" />
        <Input placeholder="Longitude" type="text" />
        <Button>Submit</Button>
      </Form>
    </Container>
  );
};

export default CreateVendor;
