import OverviewTemplate from "./OverviewTemplate";
const AllOrders = () => {
  const fakeFoods = {
    type: "orders",
    amount: 1563,
    desc: "All Orders",
    color: "#2d0941",
  };
  return (
    <>
      <OverviewTemplate data={fakeFoods} />
    </>
  );
};

export default AllOrders;
