import { Checkbox, Divider } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useAppSelector } from "../../../redux/hook";
import { CartType } from "../../../redux/ApiCall";
import ModalComponent from "./Modal";

const Container = styled.div`
  height: 25vh;
  border-radius: 15px;
  background-color: rgb(220, 222, 224);
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
`;

const PayModel = styled.div`
  align-self: baseline;
  display: flex;
  flex-direction: column;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const CheckoutWrapper = styled.div`
  align-self: baseline;
  display: flex;
  flex-direction: column;
`;

const CheckoutItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  font-size: 16px;
`;

const CheckoutBtn = styled.button`
  padding: 5px;
  border: none;
  background-color: orangered;
  color: #fff;
  border-radius: 5px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Playpen Sans", "cursive";
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }
`;
const Checkout = () => {
  const [checkedWithCash, setCheckedWithCash] = React.useState(true);
  const [checkedWithOnline, setCheckedWithOnline] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { cart } = useAppSelector((state) => state.cart);
  const totalPrice = cart
    ?.reduce((acc, item: CartType) => {
      return (acc += parseFloat(item.food.price) * item.unit);
    }, 0)
    .toFixed(2);

  return (
    <Container>
      <PayModel>
        <h3>Choose Payment Mode</h3>
        <CheckBoxWrapper>
          <Checkbox
            checked={checkedWithCash}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setCheckedWithCash(event.target.checked);
              setCheckedWithOnline(false);
            }}
            inputProps={{ "aria-label": "controlled" }}
            sx={{
              color: checkedWithCash ? "green" : "orangered",
              "&.Mui-checked": {
                color: "orangered",
              },
            }}
          />
          <span style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            Pay With cash <FaLongArrowAltRight /> FREE
          </span>
        </CheckBoxWrapper>
        <CheckBoxWrapper>
          <Checkbox
            checked={checkedWithOnline}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setCheckedWithOnline(event.target.checked);
              setCheckedWithCash(false);
            }}
            inputProps={{ "aria-label": "controlled" }}
            sx={{
              color: checkedWithOnline ? "green" : "orangered",
              "&.Mui-checked": {
                color: "orangered",
              },
            }}
          />
          <span style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            Pay With Online <FaLongArrowAltRight /> 9.89 $
          </span>
        </CheckBoxWrapper>
      </PayModel>
      <CheckoutWrapper>
        <CheckoutItem>
          <span>Sum foods price</span>
          <span>{totalPrice}</span>
        </CheckoutItem>
        <Divider />
        <CheckoutItem>
          <span>Payment mode</span>
          <span>{checkedWithCash ? `FREE` : `${9.89}$`}</span>
        </CheckoutItem>
        <Divider />
        <CheckoutItem>
          <span>Total</span>
          <span>
            {totalPrice && checkedWithCash
              ? `${(parseFloat(totalPrice) + 0).toFixed(2)} $`
              : `${(parseFloat(totalPrice!) + 9.89).toFixed(2)} $`}
          </span>
        </CheckoutItem>
        <Divider />
        <CheckoutBtn onClick={handleOpen}>
          <span>Checkout</span>
          <span>
            {totalPrice && checkedWithCash
              ? `${(parseFloat(totalPrice) + 0).toFixed(2)} $`
              : `${(parseFloat(totalPrice!) + 9.89).toFixed(2)} $`}
          </span>
        </CheckoutBtn>
      </CheckoutWrapper>
      <ModalComponent open={open} handleClose={handleClose} />
    </Container>
  );
};

export default Checkout;
