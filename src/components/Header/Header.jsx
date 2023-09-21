import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
      <div>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact Us</Link>
            <Link to='/users'>Users</Link>
            <Link to='/posts'>Posts</Link>

          {/* <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact Us</a> */}
        </nav>
      </div>
    );
};

export default Header;