import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import ManageBooks from '../services/ManageBooks';

const BookDialog = ({
  open,
  handleClose,
  handleBook,
  book,
  books,
  handleBooks,
  handleAlert,
  updateBook,
}) => {
  const { createBook } = ManageBooks();

  // Determinar si estamos editando o creando basado en si book.id existe y no es undefined
  const isEditing = book && book.id !== undefined && book.id !== '';

  // Función segura para manejar cambios en los campos
  const handleChange = (event) => {
    if (!book) return; // Protección contra book undefined

    handleBook({
      ...book,
      [event.target.name]: event.target.value,
    });
  };

  // Verificar datos del libro antes de cualquier acción
  console.log('Book Dialog - Current book:', book);
  console.log('Is Editing:', isEditing);

  // Handler seguro para botón de acción
  const handleAction = () => {
    if (!book) {
      console.error('Book object is undefined');
      return;
    }

    if (isEditing) {
      updateBook({
        selectedBook: book,
        books,
        book,
        handleBooks,
        handleClose,
        handleAlert,
      });
    } else {
      // Aseguramos que el libro tenga los campos requeridos
      const bookToCreate = {
        ...book,
        // El ID se manejará en createBook
      };

      createBook({
        book: bookToCreate,
        books,
        handleBooks,
        handleClose,
        handleAlert,
      });
    }
  };

  // Valores seguros para los campos
  const safeBook = book || { title: '', author: '', year: '', edition: '' };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{isEditing ? 'Update Book' : 'Create Book'}</DialogTitle>
      <DialogContent>
        <TextField
          margin='dense'
          name='title'
          label='Book Title'
          fullWidth
          required
          onChange={handleChange}
          value={safeBook.title || ''}
        />
        <TextField
          margin='dense'
          name='author'
          label='Author'
          fullWidth
          required
          onChange={handleChange}
          value={safeBook.author || ''}
        />
        <TextField
          margin='dense'
          name='year'
          label='Year'
          fullWidth
          required
          onChange={handleChange}
          value={safeBook.year || ''}
        />
        <TextField
          margin='dense'
          name='edition'
          label='Edition'
          fullWidth
          required
          onChange={handleChange}
          value={safeBook.edition || ''}
        />
      </DialogContent>
      <DialogActions>
        <Button color='secondary' onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={handleAction} color='primary'>
          {isEditing ? 'Update' : 'Create'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookDialog;
