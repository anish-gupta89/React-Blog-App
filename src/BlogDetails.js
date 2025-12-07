import { useParams } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { blogs, isLoading, error } = useFetch(
    "https://dummyjson.com/posts/".concat(id)
  );

  const deletePost = () => {
    fetch("https://dummyjson.com/posts/".concat(id), {
      method: "Delete",
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.isDeleted) {
          console.log("Data Deleted Successfully.....");
          history.push("/");
        }
      });
  };

  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading Post....</div>}
      {blogs && (
        <article>
          <h2>{blogs.title}</h2>
          <p>
            Written By: <b>{blogs.author}</b>
          </p>
          <br></br>
          <div>{blogs.body}</div>
          <br></br>
          <br></br>
          <button
            onClick={deletePost}
            style={{
              backgroundColor: "red",
              color: "white",
              borderRadius: "8px",
              padding: "10px",
              width: "30%",
              height: "40px",
            }}
          >
            Delete Blog
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
