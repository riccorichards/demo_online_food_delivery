import CategoryTemplate from "./CategoryTemplate";

const NearMe = () => {
  const NearMe = {
    title: "Near Me",
    id: 1,
    content: [
      { id: 1, catName: "NearMe 1" },
      { id: 2, catName: "NearMe 2" },
      { id: 3, catName: "NearMe 3" },
      { id: 4, catName: "NearMe 4" },
    ],
  };
  return (
    <>
      <CategoryTemplate title={NearMe.title} content={NearMe.content} />
    </>
  );
};

export default NearMe;
