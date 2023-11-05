import styled from "styled-components";
import TablesTemplate from "../TablesTemplate";

const Container = styled.div`
  height: 50vh;
  border-radius: 15px;
  background-color: #fff;
  padding: 15px;
`;

const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;
const VendorsTable = () => {
  const values = {
    data: [
      {
        id: 1,
        food: "food",
        order: "Jon",
        feed: 35,
        feed_avg: "46",
        incoming: "dsfsd",
        expenses: "fsdsd",
        prepare_time: 56,
      },
    ],
    columns: [
      { field: "id", headerName: "id", width: 125 },
      { field: "food", headerName: "Title", width: 125 },
      { field: "order", headerName: "Work-Hrs", width: 125 },
      { field: "feed", headerName: "Ratings", width: 125 },
    ],
  };
  return (
    <Container>
      <ContainerHeader>Vendors</ContainerHeader>
      <TablesTemplate data={values} />
    </Container>
  );
};

export default VendorsTable;
