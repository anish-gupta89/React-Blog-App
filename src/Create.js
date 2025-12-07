import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const authorArray = [
    "SELECT AN AUTHOR",
    "Anish",
    "Arnab",
    "Aadvik",
    "Prachi",
  ];
  const [author, setAuthor] = useState(authorArray[0]);
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    console.log("Event" + event);
    setIsPending(true);
    const param = { title, body, author };
    param.userId = 5;
    console.log(JSON.stringify(param));
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(param),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsPending(false);
      //  alert(JSON.stringify(data));
        history.push('/')
      });
  };

  return (
    <div className="create">
      <h2> Create New Blog</h2>
      <form action={handleSubmit}>
        <label> Blog Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label> Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label> Blog Author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          placeholder="-- Select an Option --"
        >
          {authorArray.map((data) => (
            <option value={data === "SELECT AN AUTHOR" ? "" : data} key={data}>
              {data}
            </option>
          ))}
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog.....</button>}
      </form>
      <p>{author}</p>
    </div>
  );
};

export default Create;
