import CategoryTemplate from "./CategoryTemplate";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { useEffect } from "react";
import { getVendors } from "../../../redux/ApiCall";

const Vendors = () => {
  const dispatch = useAppDispatch();
  const { vendors } = useAppSelector((state) => state.vendor);

  useEffect(() => {
    dispatch(getVendors());
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  const verndorNames = vendors?.map(({ name }) => {
    return name;
  });

  return (
    <>
      <CategoryTemplate content={verndorNames} title="Vendors"/>
    </>
  );
};

export default Vendors;
