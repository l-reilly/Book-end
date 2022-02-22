import React from "react";
//import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { updateBook, uploadImage } from "../../api";
import { useParams } from "react-router-dom"
import { UseFetch } from "../../hooks/useFetch"

function EditBook() {
  const [state, setState] = React.useState({ title: "", description: "", author: "", ISBN: "", genre: "" });
  const [file, setFile] = React.useState();
  const { bookId } = useParams() 
  const { data, loading, error } = UseFetch(
    () => updateBook(bookId),
    [bookId]
  );
  //const history = useHistory();

  const handleSubmit = async (event, res) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("imageUrl", file, file.name);
    const { data: imageData } = await uploadImage(formData);
    console.log("imageData", imageData);
    const { data } = await updateBook({
      ...state,
      imageUrl: imageData.imageUrl,
    })
    //history.push("/books")
    console.log("data", data);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const handleFileChange = ({ target }) => {
    const [file] = target.files;
    setFile(file);
  }; 

  return (
    <form onSubmit={handleSubmit}
    >
      <label htmlFor="title">Title</label>
      <input
        name="title"
        required
        onChange={handleChange}
        value={state.title}
        placeholder={data?.title}
      />
      
      <label htmlFor="author">Author</label>
      <input
        name="author"
        required
        onChange={handleChange}
        value={state.author}
        placeholder={data?.author}
      />
      <label htmlFor="description">Description</label>
      <input
        name="description"
        required
        onChange={handleChange}
        value={state.description}
        placeholder={data?.description}
      />
      <label htmlFor="ISBN">ISBN</label>
      <input
        name="ISBN"
        required
        onChange={handleChange}
        value={state.ISBN}
        placeholder={data?.ISBN}
      />
      <label htmlFor="genre">Genre</label>
      <input
        name="genre"
        required
        onChange={handleChange}
        value={state.genre}
        placeholder={data?.genre}
      />
     <input 
    type="file" 
    name="imageUrl" 
    onChange={handleFileChange}
     /> 
      <button type="submit">Update book</button>
    </form>
  );
}

export default EditBook;