import { FC } from "react";
import styled from "styled-components";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const Container = styled.div``;

interface DataType {
  columns: {
    field: string;
    headerName: string;
    width: number;
  }[];
  data: { [key: string]: string | number }[];
}

const TablesTemplate: FC<{ data: DataType }> = ({ data }) => {
  const columns: GridColDef[] = data.columns;
  const fakeRows = data.data;

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

export default TablesTemplate;
