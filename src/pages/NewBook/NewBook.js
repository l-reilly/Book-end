import React from "react";
//import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { createbook, uploadImage } from "../../api";

function NewBook() {
  const [state, setState] = React.useState({ title: "", description: "", author: "", ISBN: "", genre: "" });
  const [file, setFile] = React.useState();
  //const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("imageUrl", file, file.name);
    const { data: imageData } = await uploadImage(formData);
    console.log("imageData", imageData);
    const { data } = await createbook({
      ...state,
      imageUrl: imageData.imageUrl,
    });
    //history.push("/books")
    console.log("data", data);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  /*const handleFileChange = ({ target }) => {
    const [file] = target.files;
    setFile(file);
  }; */

  return (
    <form //onSubmit={handleSubmit}
    >
      <label htmlFor="title">Title</label>
      <input
        name="title"
        required
        onChange={handleChange}
        value={state.title}
      />
      {/* 
      <label htmlFor="author">Author</label>
      <input
        name="author"
        required
        onChange={handleChange}
        value={state.author}
      />
      <label htmlFor="description">Description</label>
      <input
        name="description"
        required
        onChange={handleChange}
        value={state.description}
      />
      <label htmlFor="ISBN">ISBN</label>
      <input
        name="ISBN"
        required
        onChange={handleChange}
        value={state.ISBN}
      />
      <label htmlFor="genre">Genre</label>
      <input
        name="genre"
        required
        onChange={handleChange}
        value={state.genre}
      />
     <input 
    type="file" 
    name="imageUrl" 
    onChange={handleFileChange}
     /> 
     comment here */}
      <button type="submit">Create book</button>
    </form>
  );
}

export default NewBook;
