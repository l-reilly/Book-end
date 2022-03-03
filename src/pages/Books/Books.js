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
      <div>
      <h2>Books</h2>
        <input className="search" type="text" name="search" id="search" placeholder="search by title"
        value={searchWord} onChange={handleSearch} />
      <div className="Search-books">
      {data?.filter(searchedWord).map((book) => (
        <div key={book._id}>
        <img src={book.imageUrl} alt="cover" className="books-search"/>
        <a href={`/books/${book._id}`}>{book.title}</a>
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