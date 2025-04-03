"use client";
import { Paper, Typography } from "@mui/material";
import BookRowActions from "./BookRowActions";
import { DataGrid } from "@mui/x-data-grid";


const BookDataGrid = ({ books, handleBook, handleOpen }) => {

  const renderActions = (params) =>
    <BookRowActions params={params}
      handleBook={handleBook}
      handleOpen={handleOpen} />;


  //Esto se usa para dataGrid
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "title", headerName: "Title", flex: 2 },
    { field: "author", headerName: "Author", flex: 1 },
    { field: "year", headerName: "Year", flex: 1 },
    { field: "edition", headerName: "Edition", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      //esto lo puse de internet no se si esta bien
      renderCell: renderActions,
    },
  ];

  return (
    <Paper sx={{ padding: 2, borderRadius: 2, margin: "0 auto", flexGrow: 1 }}>
      <DataGrid
        columns={columns}
        rows={books}
        initialState=
        {{
          pagination: { paginationModel: { page: 0, pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10]}
        sx=
        {{
          border: "1px solid #DDD",
          backgroundColor: "#F9F9F9",
          "& .MuiDataGrid-columnHeaderTitle": { fontWeight: "bold" },
          "& .MuiDataGrid-columnHeaders": { borderBottom: "2px solid #DDD" },
          "& .MuiDataGrid-row:hover": { backgroundColor: "#f5f5f5" },
          "& .MuiDataGrid-footerContainer": { backgroundColor: "f1f1f1" },
        }}
        slots={{
          noRowsOverlay: () => (
            <Box sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="body1" color='text.secondary' > No books found</Typography>
            </Box>
          )
        }}

      />
    </Paper>
  );
};

export default BookDataGrid;
