const { Edit, Delete } = require("@mui/icons-material");
const { Box, IconButton } = require("@mui/material");


const BookRowActions = ({ params, handleBook, handleOpen }) => {
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
      <IconButton color="secondary">
        <Delete />
      </IconButton>
    </Box>
  );
};
export default BookRowActions;
