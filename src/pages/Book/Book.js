import React, { useEffect } from "react";
import { UseFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { getBookById } from "../../api";
import { Suspense } from "../../components/Suspense";
import { deleteBook } from "../../api"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { useState } from "react"


function Book() {
  const { bookId } = useParams();
  const { data, error, loading } = UseFetch(
    () => getBookById(bookId),
    [bookId]
  );
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    setFavorites(data)
  }, []);
  const history = useHistory()
  async function handleDelete() {
    deleteBook(bookId).then(() => {
      history.push("/books")
    })
  }
  function handleFavorite(id){
    const newFavorites = favorites.map(book => {
      return book.id === id ? { ...book, favorite:!book.favorite } : book;
    })
    setFavorites(newFavorites)
  }

  return (
    <Suspense error={error} loading={loading} noData={!data && !loading}>
      <h2>Book</h2>
      <p>{data?.title}</p>
      <p>{data?.description}</p>
      {data?.imageUrl && <img src={data?.imageUrl} alt="cover"/>}
      <button onClick={handleDelete}>Delete</button>
      <Link to={`/books/${data?._id}/update`}>Update information</Link>
      <button onClick={() => {handleFavorite(bookId)}}>Add to your favorites</button>
    </Suspense>
  );
}

export default Book

