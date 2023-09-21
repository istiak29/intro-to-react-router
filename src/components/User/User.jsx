import PropTypes from 'prop-types';
import './User.css'
import { Link } from 'react-router-dom';

User.propTypes = {
    user: PropTypes.object
};

function User({user}) {

    const {id, name, username, email} = user;

    return (
      <div className="user-container">
        <h5>Name: {name}</h5>
        <h5>Username: {username}</h5>
        <h5>Email: {email}</h5>
        <Link to={`/user/${id}`}>Show Details</Link>
      </div>
    );
}

export default User;