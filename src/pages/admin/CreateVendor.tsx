import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../redux/hook";
import { z } from "zod";
import { isValidPhoneNumber } from "../sign/SignUp";
import { zodResolver } from "@hookform/resolvers/zod";
import { VendorCreateInput, createVendor } from "../../redux/ApiCall";
import { ErrorHandler } from "../sign/Login";

const Container = styled.div`
  margin: 35px 0;
  width: 100%;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 15px;
`;

const ContainerHeader = styled.div``;

const Form = styled.form`
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

const createVendorSchema = z.object({
  name: z.string().min(1),
  ownerName: z.string().min(1),
  foodType: z.string().min(1),
  pincode: z.string().min(1),
  address: z.string().min(1),
  phone: z.string().refine(isValidPhoneNumber, {
    message: "Invalid phone number format",
  }),
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters"),
  lat: z.string().min(1),
  lng: z.string().min(1),
});

const CreateVendor = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<VendorCreateInput>({
    resolver: zodResolver(createVendorSchema),
  });
  const dispatch = useAppDispatch();

  const onSubmit = handleSubmit((value: VendorCreateInput) => {
    dispatch(createVendor(value));
    reset();
  });

  return (
    <Container>
      <ContainerHeader>Create Vendor</ContainerHeader>
      <Form onSubmit={onSubmit}>
        <Input placeholder="Name" type="text" {...register("name")} />
        {errors?.name && <ErrorHandler>{errors.name.message}</ErrorHandler>}
        <Input
          placeholder="Owner Name"
          type="text"
          {...register("ownerName")}
        />
        {errors?.ownerName && (
          <ErrorHandler>{errors.ownerName.message}</ErrorHandler>
        )}
        <Input
          placeholder="Seperate each food type by ',' like => sea food, fry food, fresh food and so on. at the and you don't need ','"
          type="text"
          {...register("foodType")}
        />
        {errors?.foodType && (
          <ErrorHandler>{errors.foodType.message}</ErrorHandler>
        )}
        <Input placeholder="Pincode" type="text" {...register("pincode")} />
        {errors?.pincode && (
          <ErrorHandler>{errors.pincode.message}</ErrorHandler>
        )}
        <Input placeholder="Address" type="text" {...register("address")} />
        {errors?.address && (
          <ErrorHandler>{errors.address.message}</ErrorHandler>
        )}
        <Input placeholder="Phone" type="text" {...register("phone")} />
        {errors?.phone && <ErrorHandler>{errors.phone.message}</ErrorHandler>}
        <Input placeholder="Email" type="email" {...register("email")} />
        {errors?.email && <ErrorHandler>{errors.email.message}</ErrorHandler>}
        <Input
          placeholder="Password"
          type="password"
          {...register("password")}
        />
        {errors?.password && (
          <ErrorHandler>{errors.password.message}</ErrorHandler>
        )}
        <Input placeholder="Latitude" type="text" {...register("lat")} />
        {errors?.lat && <ErrorHandler>{errors.lat.message}</ErrorHandler>}
        <Input placeholder="Longitude" type="text" {...register("lng")} />
        {errors?.lng && <ErrorHandler>{errors.lng.message}</ErrorHandler>}
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default CreateVendor;
