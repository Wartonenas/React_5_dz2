import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Users from './pages/Users'
import User from './pages/User'
import Products from "./pages/Products"
import Buscket from './pages/Buscket';
import EditPost from './pages/EditPost'
import Login from './pages/Login.jsx'
import PrivateRoute from './components/PrivatRoute';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path='/users' element={<Users />} />
				<Route path='/users/:id' element={<User />} />
				<Route path='/products' element={<Products />} />
				<Route path='/buscket' element={<Buscket />} />
				<Route path="/login" element={<Login />} />
				<Route path="/create" element={<PrivateRoute><CreatePost /></PrivateRoute>} />
				<Route path="/post/:id" element={<PrivateRoute><EditPost /></PrivateRoute>} />
				<Route path="*" element={<h2>Page not Found</h2>} />
			</Routes>
			<Layout />
		</Router>
	);
};

export default App;