import { api } from "./api";

export function createBook(book) {
  return api.post("/books", book);
}

export function updateBook(bookId, book) {
  return api.put(`/books/${bookId}`, book);
}

export function getBooks() {
  return api.get("/books");
}

export function getBookById(bookId) {
  return api.get(`/books/${bookId}`);
}

export function deleteBook(bookId, book) {
  return api.delete(`/books/${bookId}`, book)
}

export function editBook(bookId) {
  return api.put(`/books/${bookId}`)
}