import SinglePost from "../../singlePost/SinglePost";
import "./single.css";
import { useParams } from 'react-router-dom';

export default function Single() {
  const { postId } = useParams();

  return (
    <div className="single">
      <SinglePost postId={postId} />
    </div>
  );
}
