import React from "react";
import { getBooks } from "../../api/books";
import { UseFetch } from "../../hooks/useFetch";
import { Suspense } from "../../components/Suspense";
import { Link } from "react-router-dom";
//import { useState } from "react";


function Books() {
  const { data, loading, error } = UseFetch(getBooks);
  const [searchWord, setSearchWord] = React.useState("")
  const handleSearch = ({ target }) => {
    setSearchWord(target.value)
  }
  const searchedWord = (book) =>
  book.title.toLowerCase().includes(searchWord);
  return (
    <Suspense noData={!data && !loading} error={error} loading={loading}>
      <div className="books-page">
      <h2>All Books</h2>
        <input className="search" type="text" name="search" id="search" placeholder="Search by title"
        value={searchWord} onChange={handleSearch} />
      <div className="all-books">
      {data?.filter(searchedWord).map((book) => (
        <div className="all-books">
        <div key={book._id} className="book-card">
        <img src={book.imageUrl} alt="cover" />
        <a href={`/books/${book._id}`}>{book.title}</a>
        <h3>Author: {book.author}</h3>
        <h3>Description: {book.description}</h3>
        </div>
        </div>
      ))}
      </div>
      </div>
      <div>

      </div>
    </Suspense>
  );
}

export default Books;