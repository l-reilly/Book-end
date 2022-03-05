import React from "react";
import { createBook, uploadImage } from "../../api";
import { useHistory } from "react-router-dom"

function NewBook() {
  const [state, setState] = React.useState({ title: "", description: "", author: "", ISBN: "", genre: "" });
  const [file, setFile] = React.useState();
  const history = useHistory()
  const handleSubmit = async (event, res) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("imageUrl", file, file.name);
    const { data: imageData } = await uploadImage(formData);
    console.log("imageData", imageData);
    const { data } = await createBook({
      ...state,
      imageUrl: imageData.imageUrl,
    }).then(() => {
      history.push("/books")
    })
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
    <div className="add-book">
    <h1>Add A New Book to the Library</h1>
    <form onSubmit={handleSubmit}
    >
      <label htmlFor="title">Title:</label>
      <input
        name="title"
        required
        onChange={handleChange}
        value={state.title}
        style={{
          marginTop: '10%',
          marginBottom: '10%',
          marginLeft: '2%',
          height: '25px',
          width: '300px',
          fontSize: '15px'
        }}
      />
      <br></br>
      <label htmlFor="author">Author:</label>
      <input
        name="author"
        required
        onChange={handleChange}
        value={state.author}
        style={{
          marginTop: '3%',
          marginBottom: '10%',
          marginLeft: '2%',
          height: '25px',
          width: '300px',
          fontSize: '15px'
        }}
      />
      <br></br>
      <label htmlFor="description">Description:</label>
      <input
        name="description"
        required
        onChange={handleChange}
        value={state.description}
        style={{
          marginTop: '3%',
          marginBottom: '10%',
          marginLeft: '2%',
          height: '25px',
          width: '300px',
          fontSize: '15px'
        }}
      />
      <br></br>
      <label htmlFor="ISBN">ISBN:</label>
      <input
        name="ISBN"
        required
        onChange={handleChange}
        value={state.ISBN}
        style={{
          marginTop: '3%',
          marginBottom: '10%',
          marginLeft: '2%',
          height: '25px',
          width: '300px',
          fontSize: '15px'
        }}
      />
      <br></br>
      <label htmlFor="genre">Genre:</label>
      <input
        name="genre"
        required
        onChange={handleChange}
        value={state.genre}
        style={{
          marginTop: '3%',
          marginBottom: '10%',
          marginLeft: '2%',
          height: '25px',
          width: '300px',
          fontSize: '15px',
        }}
      />
     <input 
    type="file" 
    name="imageUrl" 
    onChange={handleFileChange}/> 
     <br></br>
      <button type="submit" className="button"
      style={{
          marginTop: '5%',
          marginBottom: '10%',
          marginLeft: '2%',
          height: '50px',
          width: '175px',
        }}>Create book</button>
    </form>
    </div>
  );
}

export default NewBook;
