import { useState } from "react";
import { initialBook } from "../constants/BookData";

const useBooks = () => {
  // Inicializar con datos de muestra
  const [books, setBooks] = useState(initialBook);

  const handleBooks = ({ newBooks }) => {
    // Verificar que todos los libros tengan un ID
    const validatedBooks = newBooks.map(book => {
      if (!book.id && book.id !== 0) {
        // Si no tiene ID, generar uno
        const maxId = books.length > 0 ? Math.max(...books.map(b => b.id)) : 0;
        return { ...book, id: maxId + 1 };
      }
      return book;
    });

    setBooks(validatedBooks);
  };

  return { books, handleBooks };
};

export default useBooks;