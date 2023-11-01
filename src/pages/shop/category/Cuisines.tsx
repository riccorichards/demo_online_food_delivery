import CategoryTemplate from "./CategoryTemplate";

const Cuisines = () => {
  const cuisines = {
    title: "Cuisines",
    id: 1,
    content: [
      { id: 1, catName: "cuisines 1" },
      { id: 2, catName: "cuisines 2" },
      { id: 3, catName: "cuisines 3" },
      { id: 4, catName: "cuisines 4" },
    ],
  };
  return (
    <>
      <CategoryTemplate title={cuisines.title} content={cuisines.content} />
    </>
  );
};

export default Cuisines;
