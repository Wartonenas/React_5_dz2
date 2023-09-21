import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/posts');
      setPosts(response.data.posts);
    } catch (error) {
      console.log(error);
    }
	};

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {posts.map(posts => (
				<div key={posts.id}>
					<p>{posts.id}</p>
          <p>{posts.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;