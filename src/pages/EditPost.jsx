import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editPost } from "../redux-store/postSlice";
import { useParams } from "react-router-dom";

const EditPost = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const post = useSelector((state) =>
    state.post.items.find((post) => post.id === postId)
  );

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editPost({ postId, title, body }));
    setTitle("");
    setBody("");
  };

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditPost;