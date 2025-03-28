// Solo se ejecutan del lado del cliente los hooks
// Los hooks son funciones que se ejecutan en un componente de React
"use client";

import { initialBook } from "../constants/BookData";
import { useState } from "react";

const useBooks = () => {
  // Poner el estado del arreglo que vamos a mostrar en la página
  const [books, setBooks] = useState(initialBook);

  // Función que se encarga de actualizar el estado de los libros
  // Le pasamos el arreglo del nuevo libro y usamos el setter
  // para que se actualice
  const handleBooks = ({ newBooks }) => {
    setBooks(newBooks);
  };

  return { books, handleBooks };
};

export default useBooks;
