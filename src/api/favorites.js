import { api } from "./api";
export function getFavorites() {
    return api.get("/favorites");
  }

  export function getFavoriteById(favoriteId) {
    return api.get(`/favorites/${favoriteId}`);
  }

  export function createFavorite(favorite) {
    return api.post("/favorites", favorite);
  }

  export function favoriteUpdate(favoriteId, favorite) {
    return api.put(`/favorites/${favoriteId}`, favorite);
  }

  export function deleteFavorite(favoriteId, favorite) {
    return api.delete(`/favorites/${favoriteId}`, favorite);
  }