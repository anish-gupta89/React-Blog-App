import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./hooks/useFetch";

const Home = () => {
  const { blogs, isLoading, error } = useFetch("https://dummyjson.com/posts");

  return (
    <div className="home">
      {error && (
        <div style={{ color: "red", fontFamily: "fantasy", fontSize: "20" }}>
          {error}
        </div>
      )}
      {isLoading && <div>Loading Messages......</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
