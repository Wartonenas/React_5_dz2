import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
					<li><Link to="/create">Create Post</Link></li>
					<li><Link to="/users">Users</Link></li>
        </ul>
      </nav>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;