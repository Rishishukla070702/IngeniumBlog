import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./singlepost.css";

export default function SinglePost() {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const { postId } = useParams();
  const [tle, settle] = useState({});
  const [author, setAuthor] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [comment, setComment] = useState("");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => {
        setPost(res.data);
        settle(res.data);
        return axios.get(
          `https://jsonplaceholder.typicode.com/users/${res.data.userId}`
        );
      })
      .then((res) => {
        setAuthor(res.data);
      })
      .catch((err) => console.log(err));
  }, [postId]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => console.log(err));
  }, [postId]);

  useEffect(() => {
    const favoritePosts =
      JSON.parse(localStorage.getItem("favoritePosts")) || [];
    const isPostFavorite = favoritePosts.find(
      (favoritePost) => favoritePost.id === post.id
    );
    setIsFavorite(isPostFavorite);
  }, [post.id]);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    if (isFavorite) {
      const favoritePosts =
        JSON.parse(localStorage.getItem("favoritePosts")) || [];
      if (!favoritePosts.find((favoritePost) => favoritePost.id === post.id)) {
        const updatedFavoritePosts = [...favoritePosts, post];
        localStorage.setItem("favoritePosts", JSON.stringify(updatedFavoritePosts));
      }
    } else {
      const favoritePosts =
        JSON.parse(localStorage.getItem("favoritePosts")) || [];
      const updatedFavoritePosts = favoritePosts.filter(
        (favoritePost) => favoritePost.id !== post.id
      );
      localStorage.setItem("favoritePosts", JSON.stringify(updatedFavoritePosts));
    }
  }, [isFavorite, post]);

  const handleSubmitComment = () => {
    const newComment = {
      postId: postId,
      name: "John Doe",
      email: "johndoe@example.com",
      body: comment
    };

    axios
      .post("https://jsonplaceholder.typicode.com/comments", newComment)
      .then((res) => {
        setComments([...comments, res.data]);
        setComment("");
      })
      .catch((err) => console.log(err));
  };

  if (!post || !author) {
    return <div>Loading...</div>;
  }

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          {tle.title}
          <div className="singlePostEdit">
            <button
              className="singlePostFavorite"
              onClick={handleFavoriteToggle}
            >
              {isFavorite ? (
                <i className="fas fa-heart"></i>
              ) : (
                <i className="far fa-heart"></i>
              )}
            </button>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">{author.name}</b>
          </span>
        </div>
        <p className="singlePostDesc">
          {post.body}
          {post.body}
          {post.body}
          {post.body}
          {post.body}
          {post.body}
          {post.body}
          <br />
          <br />
          {post.body}
          {post.body}
          {post.body}
          {post.body}
        </p>
        <div className="comments">
          <h2>Comments</h2>
          {comments.map((comment) => (
            <div key={comment.id} className="comment">
              <h3>{comment.name}</h3>
              <p>{comment.body}</p>
              <p>{comment.email}</p>
            </div>
          ))}
          <div className="comment-form">
            <input
              type="text"
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button onClick={handleSubmitComment}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
