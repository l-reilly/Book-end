import React from "react";
import { getBooks } from "../../api/books";
import { UseFetch } from "../../hooks/useFetch";
import { Suspense } from "../../components/Suspense";
import { Link } from "react-router-dom";


function books() {
  const { data, loading, error } = UseFetch(getBooks);
  
  return (
    <Suspense noData={!data && !loading} error={error} loading={loading}>
      <h2>Books</h2>
      <div>
        {data?.map((book) => (
          <div key={book._id}>
            <p>{book.title}</p>
            <img src={book.imageUrl} alt="cover" className="books-cover"/>
            <Link to={`/books/${book._id}`}>show more</Link>
          </div>
        ))}
      </div>
    </Suspense>
  );
}

export default books;