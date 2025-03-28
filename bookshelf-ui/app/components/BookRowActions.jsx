const { Edit, Delete } = require("@mui/icons-material");
const { Box, IconButton } = require("@mui/material");


const BookRowActions = ({ params }) => {
  return (
    <Box>
      <IconButton color="primary">
        <Edit />
      </IconButton>
      <IconButton color="secondary">
        <Delete />
      </IconButton>
    </Box>
  );
};
export default BookRowActions;
