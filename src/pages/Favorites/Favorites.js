import React from "react";
import { getFavorites } from "../../api";
import { UseFetch } from "../../hooks/useFetch";
import { Suspense } from "../../components/Suspense";

function Favorites() {
  const { data, loading, error } = UseFetch(getFavorites);
  console.log("favorites", data);
  return (
    <Suspense noData={!data && !loading} error={error} loading={loading}>
      <div>
        {data?.map((favorite) => {
          return (
            <div key={favorite._id}>
              {favorite.book?.imageUrl && (
                <a href={`/favorites/${favorite}._id}`}>
                  <img src={favorite.book?.imageUrl} alt="cover"/>
                </a>
              )}
              <div>
                {favorite.book?.title && (
                  <a href={`/favorites/${favorite._id}`}>
                    <h1>
                      {favorite.book?.title}
                    </h1>
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