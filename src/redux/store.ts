import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./slice/AuthSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import VendorSlice from "./slice/VendorSlice";
import FoodSlice from "./slice/FoodSlice";
import CartSlice from "./slice/CartSlice";

const persistConfig = {
  key: "demo_online",
  storage,
  whitelist: ["auth", "cart"],
  blachlist: ["vendor"],
};

const rootReducer = combineReducers({
  auth: AuthSlice,
  vendor: VendorSlice,
  food: FoodSlice,
  cart: CartSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: true,
      },
    }),
});

export const persistor = persistStore(store);

export type RoofState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
