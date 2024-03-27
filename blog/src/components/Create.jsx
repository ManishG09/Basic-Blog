import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onClick={handleSubmit}>
        <label>Blog title :</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Blog body</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <lable>Author</lable>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
          <option value="luigi">luigi</option>
          <option value="gowtham">gowtham</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Create;
