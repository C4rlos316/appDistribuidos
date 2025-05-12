const { Edit, Delete } = require("@mui/icons-material");
const { Box, IconButton } = require("@mui/material");


const BookRowActions = ({
  params,
  handleBook,
  handleOpen,
  deleteBook,
  books,
  handleBooks,
  handleOpenAlert
}) => {
  return (
    <Box>
      <IconButton
        color="primary"
        onClick={() => {
          //console.log("Edit")
          handleBook(params.row);
          handleOpen();
        }}

      >
        <Edit />

      </IconButton>


      <IconButton color="secondary"
        onClick={() => {
          //console.log("Delete")
          deleteBook({
            bookId: params.row.id,
            books,
            handleBooks,
            handleOpenAlert
          });
        }}

      >
        <Delete />
      </IconButton>
    </Box>
  );
};
export default BookRowActions;


//<IconButton color="secondary" onClick={() => { //console.log("Delete")deleteBook(params.row.id);}}>



<IconButton color="secondary"
  onClick={() => {
    //console.log("Delete")
    deleteBook({ bookId: params.row.id, books, handleBooks, handleOpenAlert });
  }}

>
  <Delete />


</IconButton>