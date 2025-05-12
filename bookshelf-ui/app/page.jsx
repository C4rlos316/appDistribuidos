'use client';
import { Button, Container, Box } from '@mui/material';
import BookDataGrid from "./components/BookDataGrid";
import { Add } from "@mui/icons-material";

import useBooks from "./hooks/useBooks";
import useBook from "./hooks/useBook";
import BookDialog from "./components/BookDialog";

import useDialog from "./hooks/useDialog";
import BookNotifications from "./components/BookNotifications";
import useAlert from "./hooks/useAlert";
import ManageBooks from "./services/ManageBooks";

export default function Home() {
  const { books, handleBooks } = useBooks();
  const { open, handleOpen, handleClose } = useDialog();
  const { book, handleBook } = useBook();
  const { open: openAlert, alert, handleAlert: handleOpenAlert, handleClose: handleCloseAlert } = useAlert();
  const { createBook, updateBook, deleteBook } = ManageBooks();

  // Reset form handler
  const resetAndOpenForm = () => {
    // Importante: usamos un objeto vacío con id explícitamente undefined
    handleBook({
      id: undefined,
      title: '',
      author: '',
      year: '',
      edition: ''
    });
    handleOpen();
  };

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
          onClick={resetAndOpenForm}
        >
          Add Book
        </Button>
      </Box>

      <BookDataGrid
        books={books}
        handleBook={handleBook}
        handleOpen={handleOpen}
        handleOpenAlert={handleOpenAlert}
        handleBooks={handleBooks}
        deleteBook={deleteBook}
      />

      <BookDialog
        open={open}
        handleClose={handleClose}
        book={book}
        handleBook={handleBook}
        books={books}
        handleBooks={handleBooks}
        handleAlert={handleOpenAlert}
        updateBook={updateBook}
      />

      <BookNotifications
        open={openAlert}
        handleClose={handleCloseAlert}
        alert={alert}
      />
    </Container>
  );
}