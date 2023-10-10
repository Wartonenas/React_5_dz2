import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('kminchelle');
	const [password, setPassword] = useState('0lelplR');
	const navigate = useNavigate()

  const handleSubmit = (e) => {
		e.preventDefault();

		const auth = async () => {
			const resp = await axios.post('https://dummyjson.com/auth/login', { username, password })
			localStorage.setItem('token', resp.data.token)
		}
		auth()
		navigate('/')
	}

  return (
    <div>
      <span>Страница входа</span>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Имя пользователя' value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder='Пароль' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Войти</button>
      </form>
    </div>
  )
}

export default Login