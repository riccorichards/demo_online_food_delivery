import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { Divider } from "@mui/material";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import React, { useEffect } from "react";
import {
  CartInput,
  CartType,
  deleteFoodFromCart,
  deleteFoodType,
  getCart,
  updateCart,
} from "../../../redux/ApiCall";
import { MdDeleteForever } from "react-icons/md";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex: 5;
  overflow-y: auto;
  padding: 15px;
`;

const FoodWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 20vh;
  position: relative;
`;

const FoodDetails = styled.div`
  display: flex;
  align-items: center;
  flex: 3;
  gap: 10px;
  height: 100%;
`;

const Image = styled.img`
  flex: 1;
  border-radius: 15px;
  height: 100%;
`;

const FoodDesc = styled.div`
  flex: 2;
  height: 100%;
  font-size: 12px;
`;

const PriceWrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  font-size: 14px;
  justify-content: center;
  align-items: center;
`;
const PriceDetails = styled.div``;

const QtyWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  height: 100%;
  font-size: 24px;
`;
const Qty = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const ButtonController = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  font-size: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }
`;

const Total = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const RemoveFood = styled(MdDeleteForever)`
  position: absolute;
  top: 2.5%;
  right: 0;
  font-size: 18px;
  color: red;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }
`;

const CartFoodList = () => {
  const { cart } = useAppSelector((state) => state.cart);
  const { auth } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const signature = auth?.signature;

  useEffect(() => {
    try {
      if (signature) dispatch(getCart(signature));
    } catch (error: any) {
      console.log({ err: error.message });
    }
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  const handleChangeQty = (cart: CartType, type: string) => {
    if (type === "dec") {
      if (cart.unit > 1) {
        const updateUnit = { ...cart, unit: cart.unit - 1 };
        if (signature) {
          const cartData: CartInput = {
            data: {
              _id: updateUnit.food._id,
              unit: updateUnit.unit,
            },
            signature: signature,
          };
          dispatch(updateCart(cartData));
        }
      }
    } else {
      const updateUnit = { ...cart, unit: cart.unit + 1 };
      if (signature) {
        const cartData: CartInput = {
          data: {
            _id: updateUnit.food._id,
            unit: updateUnit.unit,
          },
          signature: signature,
        };
        dispatch(updateCart(cartData));
      }
    }
  };

  const removeFoodFromCart = (foodId: string) => {
    try {
      if (signature) {
        const deleteFood: deleteFoodType = {
          _id: foodId,
          signature: signature,
        };
        dispatch(deleteFoodFromCart(deleteFood));
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <Container>
      {cart &&
        cart.map((item) => (
          <React.Fragment key={item._id}>
            <FoodWrapper>
              <RemoveFood onClick={() => removeFoodFromCart(item.food._id)} />
              <FoodDetails>
                <Image src={item.food?.images} />
                <FoodDesc>
                  <h3>{item.food?.name}</h3>
                  <p>{item.food?.description}</p>
                  <p>{item.food?._id}</p>
                </FoodDesc>
              </FoodDetails>
              <PriceWrapper>
                <PriceDetails>
                  <p>Discaount: 0</p>
                  <p>Bonus: 0</p>
                  <p>{`$ ${item.food?.price}`}</p>
                </PriceDetails>
              </PriceWrapper>
              <QtyWrapper>
                <Qty>
                  <ButtonController>
                    <CiCircleMinus
                      onClick={() => handleChangeQty(item, "dec")}
                    />
                  </ButtonController>
                  {item.unit}
                  <ButtonController>
                    <CiCirclePlus
                      onClick={() => handleChangeQty(item, "inc")}
                    />
                  </ButtonController>
                </Qty>
              </QtyWrapper>
              <Total>
                <p>Total Amount</p>
                {`$ ${(parseFloat(item.food?.price) * item.unit).toFixed(2)}`}
              </Total>
            </FoodWrapper>
            <Divider />
          </React.Fragment>
        ))}
    </Container>
  );
};

export default CartFoodList;
