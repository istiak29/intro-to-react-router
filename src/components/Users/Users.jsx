import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {

    const users = useLoaderData()
    console.log(users)

    return (
      <div>
        <h3>Hello all users: {users.length}</h3>

        <div className="all-user">
          {users.map((user) => (
            <User key={user.id} user={user}></User>
          ))}
        </div>
      </div>
    );
};

export default Users;