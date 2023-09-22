import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import '../css/User.css'
import axios from 'axios';

const User = () => {
	const [user, setUser] = useState([]);
	const [info, setInfo] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const { id } = useParams()

	useEffect(() => {
		axios.get(`https://dummyjson.com/users/${id}`)
			.then((resp) => setUser(resp.data));
	}, [id]);

	const handlePosts = (id) => {
		setSearchParams({ tab: "posts" });
		axios.get(`https://dummyjson.com/users/${id}/posts`)
			.then((resp) => setInfo(resp.data.posts));
	};

	const handleTodos = (id) => {
		setSearchParams({ tab: "todos" });
		axios.get(`https://dummyjson.com/users/${id}/todos`)
			.then((resp) => setInfo(resp.data.todos));
	};

	return (
		<div>
			<h1>User</h1>
			<h4>{user.firstName} {user.lastName}</h4>
			<p>Лет: {user.age}</p>
			<div key={info.id} onClick={() => handlePosts(id)} className='post'>
				<h4 className='info'>Посты</h4>
				{info.map(post => (
					<div key={post.id}>
						<p>{post.title}</p>
						<p>{post.body}</p>
					</div>
				))}
			</div>
			<div key={id} onClick={() => handleTodos(id)} className='todo'>
				<h4 className='info'>Список дел</h4>
				{info.map(todo => (
					<div key={todo.id}>
						<h5>{todo.todo}</h5>
					</div>
				))}
			</div>
		</div>
	);
}

export default User;