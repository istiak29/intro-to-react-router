import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData()

    const {name} = user;

    return (
        <div>
            <h3>Hello, {name} dear User!</h3>
        </div>
    );
};

export default UserDetails;