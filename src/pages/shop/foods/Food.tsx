import { FC, useState } from "react";
import styled from "styled-components";
import { AddFoodToCart, CartInput, GetFoodsType } from "../../../redux/ApiCall";
import { BsCartCheck, BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { Alert, Snackbar } from "@mui/material";

export interface ButtonsType {
  type: "buy" | "sell";
}

const Contaier = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 0 10.5px rgba(0, 0, 0, 0.35);
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 15px;
  box-shadow: 0 1.5px 15px rgba(0, 0, 0, 0.35);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;

const Title = styled.h3`
  margin: 0;
  align-self: flex-start;
`;

const Desc = styled.span`
  font-size: 12px;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Price = styled.span`
  font-size: 14px;
  align-self: flex-start;
`;

const ActionButtuns = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Buttons = styled.div<ButtonsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  background-color: ${(props) =>
    props.type === "buy" ? "orangered" : "#032f05"};
  color: ${(props) => (props.type === "buy" ? "#032f05" : "#fff")};

  &:active {
    transform: scale(0.95);
  }
`;

const Food: FC<{ food: GetFoodsType }> = ({ food }) => {
  const [isWished, setIsWished] = useState(false);
  const dispatch = useAppDispatch();
  const { auth } = useAppSelector((state) => state.auth);
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const signature = auth?.signature;
  const toggleWish = () => {
    setIsWished(!isWished);
  };

  const createCart = () => {
    try {
      if (signature) {
        const cart: CartInput = {
          data: {
            _id: food._id,
            unit: 1,
          },
          signature: signature,
        };
        dispatch(AddFoodToCart(cart));
        setOpen(true);
      }
    } catch (error: any) {
      console.log({ err: error.message });
    }
  };

  return (
    <Contaier>
      <ImageWrapper>
        <Image src={food.images} />
      </ImageWrapper>
      <InfoWrapper>
        <Title>{food.name}</Title>
        <Desc>{food.description}</Desc>
        <Actions>
          <Price>{`$ ${food.price}`}</Price>
          <ActionButtuns>
            <Buttons type="buy">
              <BsCartCheck onClick={createCart} />
            </Buttons>
            <Buttons type="sell">
              {isWished ? (
                <BsSuitHeartFill onClick={toggleWish} />
              ) : (
                <BsSuitHeart onClick={toggleWish} />
              )}
            </Buttons>
          </ActionButtuns>
        </Actions>
      </InfoWrapper>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{
            width: "100%",
            backgroundColor: "lightGreen",
            color: "#032f05",
            fontFamily: "Playpen Sans, cursive",
          }}
        >
          This is a success message!
        </Alert>
      </Snackbar>
    </Contaier>
  );
};

export default Food;
