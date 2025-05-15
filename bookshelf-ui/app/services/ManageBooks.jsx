const ManageBooks = () => {
  const createBook = ({ book, books, handleBooks, handleClose, handleAlert }) => {
    // Asegurarse de que el libro tenga un ID antes de añadirlo
    if (!book.id && book.id !== 0) {
      // Calcular el nuevo ID basado en el máximo ID existente
      const maxId = books.length > 0 ? Math.max(...books.map((b) => b.id)) : 0;
      book = { ...book, id: maxId + 1 };
    }

    // Verificar datos antes de añadir
    console.log('Creando libro con ID:', book.id, 'Datos completos:', book);

    const newBooks = [...books, book];
    handleBooks({ newBooks });
    handleClose();
    handleAlert({ message: 'Book created successfully', severity: 'success' });
  };

  const updateBook = ({ selectedBook, books, book, handleBooks, handleClose, handleAlert }) => {
    // Asegurarse de que el libro actualizado mantenga su ID
    const updatedBook = { ...book, id: selectedBook.id };

    const updatedBooks = books.map((existingBook) =>
      existingBook.id === selectedBook.id ? updatedBook : existingBook,
    );

    handleBooks({ newBooks: updatedBooks });
    handleClose();
    handleAlert({ message: 'Book updated successfully correct', severity: 'success' });
  };

  const deleteBook = ({ bookId, books, handleBooks, handleOpenAlert }) => {
    const updatedBooks = books.filter((existingBook) => existingBook.id !== bookId);
    handleBooks({ newBooks: updatedBooks });
    handleOpenAlert({ message: 'Book deleted successfully', severity: 'success' });
  };

  return { createBook, updateBook, deleteBook };
};

export default ManageBooks;
