
'use client';
import BookDataGrid from "./components/BookDataGrid";

import useBooks from "./hooks/useBooks";
export default function Home() {
  const { books } = useBooks();
  return <BookDataGrid books={books} />;
}
