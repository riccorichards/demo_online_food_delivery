import styled from "styled-components";

const Form = styled.form`
  width: 80%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const Input = styled.input`
  border-radius: 15px;
  border: none;
  padding: 8px 12px;
  width: 80%;
  font-family: "Playpen Sans", "cursive";

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  border-radius: 15px;
  padding: 8px 12px;
  border: none;
  letter-spacing: 1.5px;
  font-family: "Playpen Sans", "cursive";

  cursor: pointer;
  background-color: #70e8e8;
  &:active {
    transform: scale(0.9);
  }
`;

const SignUp = () => {
  return (
    <Form>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="text" placeholder="Phone" />
      <Button>Sign Up</Button>
    </Form>
  );
};

export default SignUp;
