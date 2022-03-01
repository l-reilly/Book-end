import React from "react";
import { updateBook, getBookById, uploadImage } from "../../api";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

function EditBook() {
  const { bookId } = useParams();
  const [state, setState] = React.useState({
    title: "",
    author: "",
    description: "",
    ISBN: "",
    genre: "",
  });
  const [file, setFile] = React.useState();

  const history = useHistory();

  async function getBookInfo() {
    const { data } = await getBookById(bookId);
    setState(data);
    console.log("book data", data);
  }

  React.useEffect(() => {
    getBookInfo();
  }, []);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const handleFileChange = ({ target }) => {
    const [file] = target.files;
    setFile(file);
  };

  const handleSubmit = async (event) => {
    let imageUrl;
    event.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append("imageUrl", file);
      const { data } = await uploadImage(formData);
      imageUrl = data.imageUrl;
    }

    const { data } = await updateBook(bookId, state, imageUrl);
    console.log("data", data);
    history.push("/books");
  };

  return (
    <div>
      <form className="Form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input name="title" onChange={handleChange} value={state.title} />

        <label htmlFor="description">Description</label>
        <input name="description" onChange={handleChange} value={state.description} />

        <label htmlFor="author">Author</label>
        <input name="author" onChange={handleChange} value={state.author} />
        
        <label htmlFor="ISBN">ISBN</label>
        <input name="ISBN" onChange={handleChange} value={state.ISBN}
        />
        <label htmlFor="genre">Genre</label>
        <input name="genre" onChange={handleChange} value={state.genre} />
       
        <input type="file" name="imageUrl" onChange={handleFileChange} />

        <button type="submit">Update Book</button>
      </form>
    </div>
  );
}

export default EditBook;
