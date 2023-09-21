import PropTypes from 'prop-types';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';

Post.propTypes = {
    post: PropTypes.object
};

function Post({post}) {
    const {id, title} = post;

    const navigate = useNavigate();

    const handleDetails = () => {
        navigate(`/post/${id}`)
    };

    return (
      <div className="post-container">
        <h4>ID: {id}</h4>
        <h5>{title}</h5>
        <Link to={`/post/${id}`}>See Post</Link>
        <button onClick={handleDetails}>Click to see Details</button>
      </div>
    );
}

export default Post;