import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { fetchOtp } from "../../redux/ApiCall";
import React, { FC } from "react";

const Btn = styled.button`
  padding: 7.5px;
  font-size: 14px;
  border-radius: 5px;
  box-shadow: 0 0 10.5px rgba(0, 0, 0, 0.35);
  border: none;
  background-color: #032f05;
  color: #fff;
  font-family: "Playpen Sans", "cursive";
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }
`;

const Resend: FC<{ setOpen: any }> = ({ setOpen }) => {
  const dispatch = useAppDispatch();
  const signature = useAppSelector((state) => state.auth.auth?.signature);
  const makeOtpRequest = () => {
    try {
      if (signature) {
        dispatch(fetchOtp(signature));
        setOpen(true);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return <Btn onClick={() => makeOtpRequest()}>Resend</Btn>;
};

export default Resend;
