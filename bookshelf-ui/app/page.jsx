
'use client';
import { Button, Container, Box } from "@mui/material";
import BookDataGrid from "./components/BookDataGrid";
import { Add } from "@mui/icons-material"; // Also adding Add icon import

import useBooks from "./hooks/useBooks";
import useBook from "./hooks/useBook";  // Para manejar el libro individual
import BookDialog from "./components/BookDialog"; // Add this import

import useDialog from "./hooks/useDialog";
import BookNotifications from "./components/BookNotifications";
import useAlert from "./hooks/useAlert";
import ManageBooks from "./services/ManageBooks"; // Import the ManageBooks service
export default function Home() {
  const { books, handleBooks } = useBooks();

  const { open, handleOpen, handleClose } = useDialog();

  const { book, handleBook } = useBook();

  const { open: openAlert, alert, handleAlert: handleOpenAlert, handleClose: handleCloseAlert } = useAlert();


  const { updateBook } = ManageBooks(); // Ahora sí se ejecuta

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
            handleBook({
              id: undefined,
              title: '',
              author: '',
              year: '',
              edition: ''
            }); // Reset the book state
            handleOpen();
            //handleOpenAlert({ message: '', severity: '' });
          }
          }
        > Add Book </Button>

      </Box>
      <BookDataGrid

        books={books}
        handleBook={handleBook}
        handleOpen={handleOpen} />;
      <BookDialog open={open} handleClose={handleClose}
        book={book}
        handleBook={handleBook}
        books={books}
        handleBooks={handleBooks}
        handleAlert={handleOpenAlert}
        //createBook={createBook}
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
