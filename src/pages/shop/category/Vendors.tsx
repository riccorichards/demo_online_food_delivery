import CategoryTemplate from "./CategoryTemplate";

const Vendors = () => {
  const vendors = {
    title: "Vendors",
    id: 1,
    content: [
      { id: 1, catName: "vendor 1" },
      { id: 2, catName: "vendor 2" },
      { id: 3, catName: "vendor 3" },
      { id: 4, catName: "vendor 4" },
    ],
  };
  return (
    <>
      <CategoryTemplate title={vendors.title} content={vendors.content} />
    </>
  );
};

export default Vendors;
