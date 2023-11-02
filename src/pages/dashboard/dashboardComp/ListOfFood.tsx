import styled from "styled-components";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const Container = styled.div`
  height: 90vh;
  border-radius: 15px;
  background-color: #fff;
  padding: 15px;
`;

const columns: GridColDef[] = [
  { field: "id", headerName: "Pincode", width: 125 },
  { field: "food", headerName: "Food_title", width: 125 },
  { field: "order", headerName: "Orders", width: 125 },
  { field: "feed", headerName: "Feeds", width: 125 },
  { field: "feed_avg", headerName: "Feeds_AVG", width: 125 },
  { field: "incoming", headerName: "Incoming", width: 125 },
  { field: "expenses", headerName: "Expenses", width: 125 },
  { field: "prepare_time", headerName: "Preparation_time ", width: 125 },
];

const fakeRows = [
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
];

const ListOfFood = () => {
  return (
    <Container>
      <DataGrid
        rows={fakeRows}
        columns={columns}
        autoHeight
        autoPageSize
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20, 100]}
      />
    </Container>
  );
};

export default ListOfFood;
