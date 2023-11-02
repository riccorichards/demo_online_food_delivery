import styled from "styled-components";
import Vendor from "./Vendor";

const Container = styled.div`
  width: 100%;
  border-radius: 15px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
`;

const ListOfVendors = () => {
  const listArr = [
    {
      id: 1,
      title: "rest_1",
      ordersAmount: 1560,
      cuisines: "sea food",
      address: "somethere",
    },
    {
      id: 2,
      title: "rest_2",
      ordersAmount: 1560,
      cuisines: "sea food",
      address: "somethere",
    },
    {
      id: 3,
      title: "rest_3",
      ordersAmount: 1560,
      cuisines: "sea food",
      address: "somethere",
    },
    {
      id: 4,
      title: "rest_4",
      ordersAmount: 1560,
      cuisines: "sea food",
      address: "somethere",
    },
    {
      id: 5,
      title: "rest_5",
      ordersAmount: 1560,
      cuisines: "sea food",
      address: "somethere",
    },
    {
      id: 6,
      title: "rest_6",
      ordersAmount: 1560,
      cuisines: "sea food",
      address: "somethere",
    },
    {
      id: 7,
      title: "rest_7",
      ordersAmount: 1560,
      cuisines: "sea food",
      address: "somethere",
    },
  ];
  return (
    <Container>
      {listArr.map((vendor) => (
        <Vendor vendor={vendor} />
      ))}
    </Container>
  );
};

export default ListOfVendors;
