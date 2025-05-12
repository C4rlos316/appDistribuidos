import { useState } from "react";

const useBook = () => {
    // Estado inicial con valores seguros
    const [book, setBook] = useState({
        id: undefined, // ID explícitamente undefined para nuevos libros
        title: "",
        author: "",
        year: "",
        edition: "",
    });

    const handleBook = (newBook) => {
        // Asegurarse de que siempre tengamos un objeto válido
        const validatedBook = newBook || {
            id: undefined,
            title: "",
            author: "",
            year: "",
            edition: "",
        };

        // Mantener el ID existente si está presente


        console.log("Setting book to:", validatedBook);
        setBook(validatedBook);
    };

    return { book, handleBook };
};

export default useBook;