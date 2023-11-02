import OverviewTemplate from "./OverviewTemplate";
const AllFoods = () => {
  const fakeFoods = {
    type: "foods",
    amount: 156,
		desc: "Foods in menu",
		color: "#53fbbd"
  };
  return (
    <>
      <OverviewTemplate data={fakeFoods} />
    </>
  );
};

export default AllFoods;
