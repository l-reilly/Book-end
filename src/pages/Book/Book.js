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
  const history = useHistory()
  const handleFavorite = async (event) => {
    event.preventDefault();
    const { data } = await createFavorite(state).then(() =>{
      history.push("/user-profile")
    })
    console.log("favorite", data)
  } 
 
  async function handleDelete() {
    deleteBook(bookId).then(() => {
      history.push("/books")
    })
  }
  

  return (
    <Suspense error={error} loading={loading} noData={!data && !loading}>
    <div className="book-info">
      <h1>{data?.title}</h1>
      <h2>Author: {data?.author}</h2>
      <p>Description: {data?.description}</p>
      {data?.imageUrl && <img src={data?.imageUrl} alt="cover"/>}
      <div className="button-space">
      <button onClick={handleDelete}>Delete Book</button>
      <Link to={`/books/${data?._id}/update`}>
      <button> Update Information
      </button></Link>
     <form onSubmit={handleFavorite}>
      <button type="submit">Save to your favorites</button>
      </form>
      </div>
      </div>
    </Suspense>
  );
}

export default Book

