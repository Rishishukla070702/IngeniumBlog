import "./posts.css";
import Post from "../post/Post";
import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Posts() {
  const [pos, setPos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        setPos(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  // Logic to get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = pos.slice(indexOfFirstPost, indexOfLastPost);

  // Logic to paginate through posts
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="posts">
      {currentPosts.map((p) => (
        <Post post={p} key={p.id} />
      ))}
      <br/>
      <div className="pagination">
        {Array.from({ length: Math.ceil(pos.length / postsPerPage) }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageClick(i + 1)}
            className={currentPage === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
