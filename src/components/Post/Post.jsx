import PropTypes from 'prop-types';
import './Post.css'
import { Link } from 'react-router-dom';

Post.propTypes = {
    post: PropTypes.object
};

function Post({post}) {
    const {id, title} = post;
    return (
        <div className='post-container'>
            <h4>ID: {id}</h4>
            <h5>{title}</h5>
            <Link to={`/post/${id}`}>See Post</Link>
        </div>
    );
}

export default Post;