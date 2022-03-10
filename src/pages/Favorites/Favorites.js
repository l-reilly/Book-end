import React from "react";
import { getFavorites, deleteFavorite } from "../../api";
import { UseFetch } from "../../hooks/useFetch";
import { Suspense } from "../../components/Suspense";
import { useHistory } from "react-router-dom";

function Favorites() {
  const { data, loading, error } = UseFetch(getFavorites);
  console.log("favorites", data);
  const history = useHistory();
  
  return (
    <Suspense noData={!data && !loading} error={error} loading={loading}>
      <div>
        {data?.map((favorite) => {
          const handleDelete = () => {
            deleteFavorite(favorite._id);
            history.push("/books");

          }
          return (
            <div className="book-card" key={favorite._id}>
              {favorite.book?.imageUrl && (
                  <img src={favorite.book?.imageUrl} alt="cover"/>
        
              )}
              <div>
                <div>
                {favorite.book?.title && (
                  <a
                    href={`/books/${favorite.book?._id}`}
                  >
                    <h1>
                      {favorite.book?.title}
                    </h1>
                    <h2>{favorite.book?.author}</h2>
                  </a>
                )}
                 <button className="button" onClick={handleDelete}>Remove from Favorites</button>
          </div>
              </div>
              <div>
                
           
              </div>
            </div>
            
          );
        })}
      </div>
    </Suspense>
  );
}

export default Favorites;