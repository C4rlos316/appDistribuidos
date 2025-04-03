const ManageBooks = () => {

    //1 useBook 2-3 useBooks 4 useDialog
    const createBook = ({ book, books, handleBooks, handleClose, handleAlert }) => {

        const newBooks = [...books, { id: books.length + 1, ...book }];
        handleBooks({ newBooks });
        handleClose();
        handleAlert({ message: 'Book created successfully', severity: 'success' });

    };

    const updateBook = ({ selectedBook, books, book, handleBooks, handleClose, handleAlert }) => {
        const updatedBooks = books.map((existingBook) =>
            existingBook.id === selectedBook.id
                ? { ...selectedBook, ...book }
                : existingBook
        );

        handleBooks({ newBooks: updatedBooks });
        handleClose();
        handleAlert({ message: 'Book updated successfully', severity: 'success' });

    }

    return { createBook, updateBook };
}
export default ManageBooks;