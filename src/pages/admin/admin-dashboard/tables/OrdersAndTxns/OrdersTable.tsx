import styled from "styled-components";
import TablesTemplate from "../TablesTemplate";

const Container = styled.div``;

const OrdersTable = () => {
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
      { field: "id", headerName: "Pincode", width: 125 },
      { field: "food", headerName: "Title", width: 125 },
      { field: "order", headerName: "Rating", width: 125 },
      { field: "feed", headerName: "Vendor", width: 125 },
    ],
  };
  return (
    <Container>
      <TablesTemplate data={values} />
    </Container>
  );
};

export default OrdersTable;
