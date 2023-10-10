import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "../redux-store/postSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const { items, loading, error } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {items &&
          items.map((post) => (
            <li key={post.id}>
              <h2>{post.id}</h2>
              <h3>{post.title}</h3>
              <Link to={`/post/${post.id}`}>Edit Post</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Home;