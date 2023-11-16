import { Box, Divider, Modal, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch } from "../../../redux/hook";
import { setOrderInfo } from "../../../redux/slice/CartSlice";

type ModalType = {
  open: boolean;
  handleClose: any;
};

const BoxStyle = styled(Box)`
  height: 30vh;
  width: 250px;
  background-color: #fff;
  border-radius: 15px;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  position: absolute;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
`;

const Input = styled.input`
  padding: 5px;
  width: calc(100% - 10px);
  font-family: "Playpen Sans", "cursive";
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 5.5px rgba(0, 0, 0, 0.35);

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  font-family: "Playpen Sans", "cursive";
  padding: 5px;
  background-color: #032f05;

  &:active {
    transform: scale(0.95);
  }
`;

const HandleDemo = styled.button`
  font-family: "Playpen Sans", "cursive";
  font-size: 10px;
  padding: 2.5px;
`;

const ModalComponent: FC<ModalType> = ({ open, handleClose }) => {
  const [isDemo, setIsDemo] = useState(false);
  const initialValue = {
    address: "",
    phone: "",
  };
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [inputValues, setInputValues] = useState(initialValue);

  useEffect(() => {
    setInputValues({
      address: isDemo ? "ვაჟა-ფშაველას გამზირი, Tbilisi, Georgia" : "",
      phone: isDemo ? "+995 555 555" : "",
    });
  }, [isDemo]);

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { address, phone } = inputValues;
    if (address !== "") {
      dispatch(setOrderInfo({ address, phone }));
      navigate("/current-order");
    }
  };

  const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <BoxStyle>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{
            fontSize: "24px",
            fontWeight: "700",
            fontFamily: "Playpen Sans, cursive",
          }}
        >
          Create Order
        </Typography>
        <Divider />
        <HandleDemo onClick={() => setIsDemo(!isDemo)}>demo address</HandleDemo>
        <Form onSubmit={handlerSubmit}>
          <Input
            placeholder="address"
            value={inputValues.address}
            name="address"
            onChange={handlerInput}
          />
          <Input
            placeholder="+995 555-555"
            value={inputValues.phone}
            name="phone"
            onChange={handlerInput}
          />
          <Button type="submit">Submit</Button>
        </Form>
      </BoxStyle>
    </Modal>
  );
};

export default ModalComponent;
