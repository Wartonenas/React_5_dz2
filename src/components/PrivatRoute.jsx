import { Navigate } from "react-router-dom"

const PrivateRoute = () => {
	let userLogged = localStorage.getItem('token')

	if (!userLogged) {
		return <Navigate to="/login"/>
	}
}

export default PrivateRoute