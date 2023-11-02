import OverviewTemplate from "./OverviewTemplate";
const AllFeeds = () => {
  const fakeFoods = {
    type: "feeds",
    amount: 1563,
    desc: "Feeds of foods",
    color: "#f4c91a",
  };
  return (
    <>
      <OverviewTemplate data={fakeFoods} />
    </>
  );
};

export default AllFeeds;
