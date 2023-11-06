import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RoofState, AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RoofState> = useSelector;
