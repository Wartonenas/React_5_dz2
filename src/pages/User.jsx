import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const User = () => {
	const [user, setUser] = useState([]);
	const [post, setPost] = useState([]);
	const [todo, setTodo] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const { id } = useParams()

	useEffect(() => {
		axios.get(`https://dummyjson.com/users/${id}`)
			.then((resp) => setUser(resp.data));
	}, [id]);

	const handlePosts = (id) => {
		setSearchParams({ tab: "posts" });
		axios.get(`https://dummyjson.com/posts/${id}`)
			.then((resp) => setPost(resp.data));
	};

	const handleTodos = (id) => {
		setSearchParams({ tab: "todos" });
		axios.get(`https://dummyjson.com/todos/${id}`)
			.then((resp) => setTodo(resp.data));
	};

	return (
		<div>
			<h1>User</h1>
			<h4>{user.firstName} {user.lastName}</h4>
			<p>{user.age} Лет</p>
			<div key={id} onClick={() => handlePosts(id)}>
				Посты
				<h5>{post.title}</h5>
				<p>{post.body}</p>
			</div>
			<div key={id} onClick={() => handleTodos(id)}>
				Список дел
				<h5>{todo.todo}</h5>
			</div>
		</div>
	);
}

export default User;