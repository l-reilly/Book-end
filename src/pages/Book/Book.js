import React, { useEffect } from "react";
import { UseFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { getBookById, createFavorite } from "../../api";
import { Suspense } from "../../components/Suspense";
import { deleteBook } from "../../api"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
//import { useState } from "react"


function Book() {
  const { bookId } = useParams();
  const { data, error, loading } = UseFetch(
    () => getBookById(bookId),
    [bookId]
  );
  const [state, setState] = React.useState({
    book: bookId
  });
  const handleFavorite = async (event) => {
    event.preventDefault();
    const { data } = await createFavorite(state)
    console.log("favorite", data)
  } 
 
  const history = useHistory()
  async function handleDelete() {
    deleteBook(bookId).then(() => {
      history.push("/books")
    })
  }
  

  return (
    <Suspense error={error} loading={loading} noData={!data && !loading}>
      <h2>Book</h2>
      <p>{data?.title}</p>
      <p>{data?.description}</p>
      {data?.imageUrl && <img src={data?.imageUrl} alt="cover"/>}
      <button onClick={handleDelete}>Delete</button>
      <Link to={`/books/${data?._id}/update`}>Update information</Link>
     <form onSubmit={handleFavorite}>
      <button type="submit">Save to your favorites</button>
      </form>
    </Suspense>
  );
}

export default Book

