import CategoryTemplate from "./CategoryTemplate";

const Food = () => {
  const Food = {
    title: "Food",
    id: 1,
    content: [
      { id: 1, catName: "Food 1" },
      { id: 2, catName: "Food 2" },
      { id: 3, catName: "Food 3" },
      { id: 4, catName: "Food 4" },
    ],
  };
  return (
    <>
      <CategoryTemplate title={Food.title} content={Food.content} />
    </>
  );
};

export default Food;
