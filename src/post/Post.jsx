import "./post.css"
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";


export default function Post({post}) {
  
  return (
    <div className="post">
        <img
        className="postImg"
        src="https://media.istockphoto.com/id/1130150680/photo/blog-and-information-website-concept-workplace-background-with-text.jpg?s=612x612&w=0&k=20&c=BtknpmORYmgMHN5Qty7N0o5mvsk204BG-q4oR8gFl_g="
        alt=""
      />
      <div className="postInfo">
        <span className="postTitle">
        <Link to={`post/${post.id}`} className="link">
            {post.title}
          </Link>
        </span>
       </div>
       <p className="postDesc">
        {post.body}
      </p>
    </div>
  )
}
