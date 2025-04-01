
'use client';
import { Button, Container, Box } from "@mui/material";
import BookDataGrid from "./components/BookDataGrid";
import { Add } from "@mui/icons-material"; // Also adding Add icon import

import useBooks from "./hooks/useBooks";
import useBook from "./hooks/useBook";  // Para manejar el libro individual
import BookDialog from "./components/BookDialog"; // Add this import

import useDialog from "./hooks/useDialog";

export default function Home() {
  const { books, handleBooks } = useBooks();

  const { open, handleOpen, handleClose } = useDialog();

  const { book, handleBook } = useBook();


  return (

    <Container>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 2


        }}>

        <Button
          startIcon={<Add />}
          variant='contained'
          onClick={() => {
            handleOpen();
          }
          }
        > Add Book </Button>

      </Box>
      <BookDataGrid books={books} />;
      <BookDialog open={open} handleClose={handleClose}
        book={book}
        handleBook={handleBook}
        books={books}
        handleBooks={handleBooks} />

    </Container>
  );


}
