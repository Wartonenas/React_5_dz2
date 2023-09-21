import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const CreatePost = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post('https://dummyjson.com/products/add', {
			title: 'Заголовок поста',
			body: 'Тело поста'
		})
			.then(function (response) {
				if (response.status === 200) {
					navigate('/')
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	return (
		<div>
			<h1>Create Post</h1>
			<form onSubmit={handleSubmit}>
				<input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
				<input type="text" value={body} onChange={e => setBody(e.target.value)} placeholder="Body" />
				<button type="submit">Create</button>
			</form>
		</div>
	);
}

export default CreatePost;