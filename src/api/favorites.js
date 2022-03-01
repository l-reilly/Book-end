import { api } from "./api"

export function addFavorite(favorite) {
    return api.post("/favorites", favorite)
}
export function deleteFavorite(favoriteId, favorite) {
    return api.delete(`/favorites/${favoriteId}`, favorite)
}