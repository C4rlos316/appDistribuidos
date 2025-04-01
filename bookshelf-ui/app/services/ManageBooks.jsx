const ManageBooks = () => {

    //1 useBook 2-3 useBooks 4 useDialog
    const createBook = ({ book, books, handleBooks, handleClose }) => {

        const newBooks = [...books, { id: books.length + 1, ...book }];
        handleBooks({ newBooks });
        handleClose();

    };

    return { createBook };
}
export default ManageBooks;