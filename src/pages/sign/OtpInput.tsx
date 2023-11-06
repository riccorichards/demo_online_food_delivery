import { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { fetchVerify } from "../../redux/ApiCall";
import { useNavigate } from "react-router-dom";
import Resend from "./Resend";

const Container = styled.div`
  width: 600px;
  height: 200px;
  border-radius: 15px;
  box-shadow: 0 0 10.5px rgba(0, 0, 0, 0.35);
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  background-color: #fff;
  flex-direction: column;
`;

const OtpWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const OtpNumber = styled.input`
  padding: 15px;
  font-size: 24px;
  text-align: center;
  border-radius: 15px;
  box-shadow: 0 0 10.5px rgba(0, 0, 0, 0.35);
  width: 35px;
  border: none;
  height: 35px;
  font-family: "Playpen Sans", "cursive";
`;

const Button = styled.button`
  padding: 15px;
  font-size: 14px;
  border-radius: 15px;
  box-shadow: 0 0 10.5px rgba(0, 0, 0, 0.35);
  border: none;
  font-family: "Playpen Sans", "cursive";
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }
`;

const OtpInput: FC<{ setOpen: any }> = ({ setOpen }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRef = useRef<(HTMLInputElement | null)[]>([]);
  const dispatch = useAppDispatch();
  const { auth } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const handlerInput = (index: number, value: string) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (index < inputRef.current.length - 1 && value !== "") {
      inputRef.current[index + 1]?.focus();
    }
  };
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text");
    if (paste.length === 6) {
      setOtp(paste.split(""));
    }
  };
  const signature = auth?.signature;
  const otpStr = otp.join("");
  const userVerifyHandler = () => {
    try {
      if (auth?.signature) {
        dispatch(fetchVerify({ otpStr, signature }));
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (auth?.verified) {
      navigate("/");
    }
  }, [auth?.verified, navigate]);
  return (
    <Container>
      <OtpWrapper>
        {otp.map((digit, index) => (
          <OtpNumber
            key={index}
            type="text"
            value={digit}
            onChange={(e) => handlerInput(index, e.target.value)}
            onPaste={handlePaste}
            maxLength={1}
            ref={(ref) => (inputRef.current[index] = ref)}
          />
        ))}
      </OtpWrapper>
      <Button onClick={() => userVerifyHandler()}>Verify account</Button>
      <Resend setOpen={setOpen} />
    </Container>
  );
};

export default OtpInput;
