import OverviewTemplate from "./OverviewTemplate";
const Expenses = () => {
  const fakeFoods = {
    type: "expenses",
    amount: 25563,
    desc: "Expenses",
    color: "#d14221",
  };
  return (
    <>
      <OverviewTemplate data={fakeFoods} />
    </>
  );
};

export default Expenses;
