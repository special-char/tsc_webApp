import React, { useEffect, useState } from "react";

const Loader = () => {
  const [post, setPost] = useState(null);
  useEffect(() => {
    fetch("https:jsonplaceholder.typicode.com/posts/1")
      .then((Response) => Response.json())
      .then((Response) => {
        const { body } = Response;
        setPost(body);
      });
  }, []);
  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      {post ? post : "Loading.."}
    </div>
  );
};

export default Loader;
