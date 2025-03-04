import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ciambella from "./img/ciambella.jpeg";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/blog")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  }, []);

  return (
    <div className="container">
    <h1 className="title">Lista Post</h1>
    <div className="posts-container">
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <img src= {ciambella} className="post-image" />
          <Link to={`/post/${post.id}`}>
            <h2 className="post-title">{post.title}</h2>
          </Link> 
        </div>
      ))}
    </div>
  </div>
);
};
export default Posts;