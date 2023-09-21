import { useLoaderData } from "react-router-dom";

const PostDetails = () => {

    const post = useLoaderData()

    const detailStyles = {
        borderRadius: '10px',
        border: '2px solid yellow'

    }

    return (
        <div style={detailStyles}>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetails;