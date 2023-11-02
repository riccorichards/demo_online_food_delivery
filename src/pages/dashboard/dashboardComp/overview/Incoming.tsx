import OverviewTemplate from "./OverviewTemplate";
const Incoming = () => {
  const fakeFoods = {
    type: "incoming",
    amount: 45623,
    desc: "Incoming",
    color: "#24d226",
  };
  return (
    <>
      <OverviewTemplate data={fakeFoods} />
    </>
  );
};

export default Incoming;
