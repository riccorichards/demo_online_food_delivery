import styled from "styled-components";
import { useForm } from "react-hook-form";
import { ErrorHandler } from "./Login";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAppDispatch } from "../../redux/hook";
import { fetchRegister } from "../../redux/ApiCall";
import React, { useState } from "react";
import OtpInput from "./OtpInput";
import { Alert, Snackbar, Stack } from "@mui/material";

const Form = styled.form`
  width: 80%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  position: relative;
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

export const isValidPhoneNumber = (phoneNumber: string): boolean => {
  const phonePattern = /^\d{9}$/;
  return phonePattern.test(phoneNumber);
};

type RegisterInputType = {
  email: string;
  password: string;
  phone: string;
};

const registrationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters"),
  phone: z.string().refine(isValidPhoneNumber, {
    message: "Invalid phone number format",
  }),
});

const SignUp = () => {
  const dispatch = useAppDispatch();
  const [isOtp, setIsOtp] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterInputType>({
    resolver: zodResolver(registrationSchema),
  });

  const [open, setOpen] = React.useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const onSubmit = handleSubmit((values: RegisterInputType) => {
    try {
      const { email, password, phone } = values;
      dispatch(fetchRegister({ email, password, phone }));
      setIsOtp(true);
    } catch (error: any) {
      console.log(error.message);
    }
  });

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Input type="email" placeholder="Email" {...register("email")} />
        {errors?.email && <ErrorHandler>{errors.email?.message}</ErrorHandler>}
        <Input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors?.password && (
          <ErrorHandler>{errors.password?.message}</ErrorHandler>
        )}
        <Input type="tel" placeholder="568 555 555" {...register("phone")} />
        {errors?.phone && <ErrorHandler>{errors.phone?.message}</ErrorHandler>}

        <Button type="submit">Sign Up</Button>
      </Form>
      {isOtp && <OtpInput setOpen={setOpen} />}
      <Stack
        spacing={2}
        sx={{
          width: "100%",
        }}
      >
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            OTP sent your registered phone number!
          </Alert>
        </Snackbar>
      </Stack>
    </>
  );
};

export default SignUp;
