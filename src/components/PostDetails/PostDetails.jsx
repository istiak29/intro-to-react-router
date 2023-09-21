import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {

    const post = useLoaderData();

    const navigate = useNavigate();

    const handleGoBack = () =>{
        navigate(-1);
    }

    const detailStyles = {
        borderRadius: '10px',
        border: '2px solid yellow'
    }

    return (
      <div style={detailStyles}>
        <p>{post.body}</p>
        <button onClick={handleGoBack}>Go Back</button>
      </div>
    );
};

export default PostDetails;