import styled from "styled-components";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorHandler } from "../../sign/Login";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { createFood } from "../../../redux/ApiCall";
import React, { useState } from "react";

const Container = styled.div`
  width: 90%;
  height: 90vh;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  position: relative;
`;

const Header = styled.h3``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 70%;
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

const Image = styled.img`
  position: absolute;
  top: 5%;
  left: 15%;
  width: 100px;
  height: 150px;
  border-radius: 5px;
  box-shadow: 0 0 5.5px rgba(0, 0, 0, 0.35);
  object-fit: cover;
`;

type CreateFoodTypeInput = {
  name: string;
  desc: string;
  foodType: string;
  readyTime: string;
  price: string;
};

const CreateFoodSchema = z.object({
  name: z.string().min(1),
  desc: z.string().min(1),
  foodType: z.string().min(1),
  readyTime: z.string().min(1),
  price: z.string().min(1),
});

const CreateFood = () => {
  const dispatch = useAppDispatch();
  const signature = useAppSelector((state) => state.auth.auth?.signature);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<CreateFoodTypeInput>({
    resolver: zodResolver(CreateFoodSchema),
  });
  const [file, setFile] = useState<File | null>(null);

  const fileSubmit = (
    event?: React.ChangeEvent<HTMLInputElement> | undefined
  ) => {
    const target = event?.target as HTMLInputElement & {
      files: FileList;
    };

    if (target.files && target.files.length > 0) {
      setFile(target.files[0]);
    }
  };

  const onSubmit = (values: CreateFoodTypeInput) => {
    const { name, desc, price, foodType, readyTime } = values;
    const formData = new FormData();
    if (file) {
      formData.append("image", file);
    }
    formData.append("name", name);
    formData.append("desc", desc);
    formData.append("price", price);
    formData.append("foodType", foodType);
    formData.append("readyTime", readyTime);

    const foodData = {
      food: formData,
      token: signature || "",
    };
    try {
      dispatch(createFood(foodData));
      reset();
      setFile(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Header>Add a new food</Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Image"
          type="file"
          onChange={fileSubmit}
          accept="image/*"
        />
        <Input placeholder="Name" {...register("name")} />
        {errors.name && <ErrorHandler>{errors.name.message}</ErrorHandler>}
        <Input placeholder="Desc" {...register("desc")} />
        {errors.desc && <ErrorHandler>{errors.desc.message}</ErrorHandler>}
        <Input
          placeholder="Separate each type of food by ',' like => seafood, chicken"
          {...register("foodType")}
        />
        {errors.foodType && (
          <ErrorHandler>{errors.foodType.message}</ErrorHandler>
        )}
        <Input placeholder="ReadyTime" {...register("readyTime")} />
        {errors.readyTime && (
          <ErrorHandler>{errors.readyTime.message}</ErrorHandler>
        )}
        <Input placeholder="Price" {...register("price")} />
        {errors.price && <ErrorHandler>{errors.price.message}</ErrorHandler>}
        <Button type="submit">Add a new Food</Button>
      </Form>
      {file ? (
        <Image src={URL.createObjectURL(file)} alt="selected file" />
      ) : null}
    </Container>
  );
};

export default CreateFood;
