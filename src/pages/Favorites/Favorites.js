import React from "react";
import { getFavorites } from "../../api";
import { UseFetch } from "../../hooks/useFetch";
import { Suspense } from "../../components/Suspense";
//import { useHistory } from "react-router-dom";


function Favorites() {
  const { data, loading, error } = UseFetch(getFavorites);
  console.log("favorites", data);


  return (
    <Suspense noData={!data && !loading} error={error} loading={loading}>
      <div>
        {data?.map((favorite) => {
          return (
            <div key={favorite._id} className="book-card">
              {favorite.book?.imageUrl && (
                  <a href={`/books/${favorite.book?._id}`}>
                  <img src={favorite.book?.imageUrl} alt="cover"/>
                  </a>
              )}
              <div>
                {favorite.book?.title && (
                    <a href={`/books/${favorite.book?._id}`}>
                     <h1>
                      {favorite.book?.title}
                    </h1>
                    <h2>Author: {favorite.book?.author}</h2>
                    <h3>Description: {favorite.book?.description}</h3>
                    </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Suspense>
  );
}

export default Favorites; 