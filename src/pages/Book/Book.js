import React from "react";
import { UseFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { getBookById } from "../../api";
import { Suspense } from "../../components/Suspense";
import { deleteBook } from "../../api"
import { editBook } from "../../api"

function Book() {
  const { bookId } = useParams();
  const { data, error, loading } = UseFetch(
    () => getBookById(bookId),
    [bookId]
  );

  return (
    <Suspense error={error} loading={loading} noData={!data && !loading}>
      <h2>Book</h2>
      <p>{data?.title}</p>
      <p>{data?.description}</p>
      {data?.imageUrl && <img src={data?.imageUrl} alt="cover"/>}
      <button onClick={() => deleteBook(bookId)}>Delete</button>
      <button onClick={() => editBook(bookId)}>Edit Book</button>
      <button>Add to your favorites</button>
    </Suspense>
  );
}

export default Book;
