import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import ManageBooks from "../services/ManageBooks";

const BookDialog = ({ open, handleClose, handleBook, book, books, handleBooks, handleAlert, updateBook }) => {

    const handleChange = (event) => {
        handleBook({
            ...book, [event.target.name]: event.target.value
        })
    };

    const { createBook } = ManageBooks();
    console.log('Flag:', book);
    const isEditing = book?.id !== undefined;

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
                {isEditing ? "Update Book" : "Create Book"}
            </DialogTitle>
            <DialogContent>
                {/* Verifica que `book` esté definido */}
                <TextField
                    margin="dense"
                    name="title"
                    label="Book Title"
                    fullWidth
                    required
                    onChange={handleChange}
                    value={book?.title}
                />
                <TextField
                    margin="dense"
                    name="author"
                    label="Author"
                    fullWidth
                    required
                    onChange={handleChange}
                    value={book.author}
                />
                <TextField
                    margin="dense"
                    name="year"
                    label="Year"
                    fullWidth
                    required
                    onChange={handleChange}
                    value={book.year}
                />
                <TextField
                    margin="dense"
                    name="edition"
                    label="Edition"
                    fullWidth
                    required
                    onChange={handleChange}
                    value={book.edition}
                />
            </DialogContent>
            <DialogActions>
                <Button color="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button
                    onClick={() =>

                        isEditing
                            ? updateBook({ selectedBook: book, books, book, handleBooks, handleClose, handleAlert })
                            : createBook({ book, books, handleBooks, handleClose, handleAlert })}
                    color="primary"
                >
                    {isEditing ? "Update" : "Create"}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default BookDialog;
