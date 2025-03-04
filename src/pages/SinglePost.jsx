import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCounter } from "../contexts/CountContext";
import ciambella from "./img/ciambella.jpeg";

const SinglePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const { increment, decrement } = useCounter();

  useEffect(() => {
    fetch(`http://localhost:3000/blog/${id}`)
      .then((res) => res.json()) 
      .then((data) => setPost(data)) 
      .catch((error) => console.error("Errore nel caricamento del post:", error));
  }, [id]);

  if (!post) {
    return <h1>Loading...</h1>;
  }

  const goToNextPost = () => {
    increment();
    navigate(`/post/${Number(id) + 1}`); 
  };

  const goToPreviousPost = () => {
    if (Number(id) > 1) {
      decrement();
      navigate(`/post/${Number(id) - 1}`);
    }
  };

  return (
    <div>
      <h1 className="title">Single Post</h1>
      <div className="container">
        <img src={ciambella} className="post-image2" alt="Post" />
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
      <div className="navigation-buttons">
        <button onClick={goToPreviousPost} disabled={Number(id) <= 1}>← Post Precedente</button>
        <button onClick={goToNextPost}>Post Successivo →</button>
      </div>
    </div>
  );
};

export default SinglePost;