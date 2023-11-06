import styled from "styled-components";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { fetchCustomerLogin, fetchVendorLogin } from "../../redux/ApiCall";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

export const ErrorHandler = styled.span`
  color: red;
  font-size: 12px;
  text-align: center;
`;
type LoginInputType = {
  email: string;
  password: string;
};

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const Login: FC<{ whoIs: string }> = ({ whoIs }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginInputType>({
    resolver: zodResolver(loginSchema),
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { auth } = useAppSelector((state) => state.auth);

  const onSubmit = (data: LoginInputType) => {
    if (whoIs === "vendor") {
      dispatch(fetchVendorLogin(data));
    } else {
      dispatch(fetchCustomerLogin(data));
    }
  };

  useEffect(() => {
    if (auth?.status === "Vendor") {
      navigate("/vendor-dashboard");
    } else if (auth?.status === "Admin") {
      navigate("/admin-dashboard");
    } else if (auth?.status === "Customer") {
      navigate("/");
    }
  }, [auth]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input type="email" placeholder="Email" {...register("email")} />
      {errors?.email && <ErrorHandler>{errors.email.message}</ErrorHandler>}
      <Input type="password" placeholder="Password" {...register("password")} />
      {errors?.password && (
        <ErrorHandler>{errors?.password.message}</ErrorHandler>
      )}
      <Button type="submit">Login</Button>
    </Form>
  );
};

export default Login;
