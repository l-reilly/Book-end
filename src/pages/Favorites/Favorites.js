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
                  <img src={favorite.book?.imageUrl} alt="cover"/>
              )}
              <div>
                {favorite.book?.title && (
                    <h1>
                      {favorite.book?.title}
                    </h1>
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