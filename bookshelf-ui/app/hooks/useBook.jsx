import { useState } from "react";

const useBook = () => {
    // Corrige la inicialización del estado
    const [book, setBook] = useState({
        title: "",
        author: "",
        year: "",
        edition: "",
    });

    const handleBook = (newBook) => {
        setBook(newBook);
    };

    return { book, handleBook };
};

export default useBook;