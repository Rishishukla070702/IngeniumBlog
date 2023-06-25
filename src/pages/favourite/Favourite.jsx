import React, { useState, useEffect } from "react";
import './Favourite.css';

export default function Favorites() {
    const [favoritePosts, setFavoritePosts] = useState([]);
  
    useEffect(() => {
      const storedFavoritePosts = JSON.parse(localStorage.getItem("favoritePosts")) || [];
      setFavoritePosts(storedFavoritePosts);
    }, []);
  
    const handleDeletePost = (postId) => {
      const updatedFavoritePosts = favoritePosts.filter((post) => post.id !== postId);
      setFavoritePosts(updatedFavoritePosts);
      localStorage.setItem("favoritePosts", JSON.stringify(updatedFavoritePosts));
    };
  
    if (favoritePosts.length === 0) {
      return <div>No favorite posts yet.</div>;
    }
  
    return (
      <div className="favoritesList"> {/* Apply the CSS class to the parent container */}
        {favoritePosts.map((post) => (
          <div key={post.id} className="favoritePost"> {/* Apply the CSS class to the post container */}
            <h2 className="favoritePostTitle">{post.title}</h2> {/* Apply the CSS class to the title */}
            <p className="favoritePostBody">{post.body}</p> {/* Apply the CSS class to the body */}
            <button className="deleteButton" onClick={() => handleDeletePost(post.id)}>Remove</button> {/* Apply the CSS class to the button */}
          </div>
        ))}
      </div>
    );
  }
  