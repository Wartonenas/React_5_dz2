import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/users?limit=100');
    setUsers(response.data.users);
    } catch (error) {
      console.log(error);
    }
	};

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.map(users => (
				<Link key={users.id} to={`/users/${users.id}`}>
					<p>User {users.id}</p>
        </Link>
      ))}
    </div>
  );
}

export default Users;