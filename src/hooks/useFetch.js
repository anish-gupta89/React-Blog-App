import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setLoadingEvent] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      console.log("URL=====>>>" +url);
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error(
              "There is some expection occured, please try again after sometime."
            );
          }
          return res.json();
        })
        .then((value) => {
          console.log(value)
          if(value.posts == null){
              value.author = "Anish ".concat(value.id)
              setBlogs(value);
          } else {
            value.posts.map((data, index) => (data.author = "Anish " + index));
             setBlogs(value.posts);
          }
        
         
          setLoadingEvent(false);
          setError(null);
        })
        .catch((err) => {
          console.log("============>>>>>" + err);
          setError(err.message);
          setLoadingEvent(false);
          setBlogs(null);
        });
    }, 2000);
  }, [url]);

  return { blogs, isLoading, error };
};

export default useFetch;
