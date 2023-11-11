import { createSlice } from "@reduxjs/toolkit";
import { GetFoodsType, createFood, getAllfoods } from "../ApiCall";

type FoodState = {
  food: FormData | null;
  foods: GetFoodsType[] | null;
  loading: boolean;
  error: string | null;
};

const initialState: FoodState = {
  food: null,
  foods: null,
  loading: false,
  error: null,
};

const FoodSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createFood.pending, (state) => {
        state.loading = true;
      })
      .addCase(createFood.fulfilled, (state, action) => {
        state.loading = true;
        state.food = action.payload;
      })
      .addCase(getAllfoods.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllfoods.fulfilled, (state, action) => {
        state.loading = true;
        state.foods = action.payload;
      });
  },
});

export default FoodSlice.reducer;
