import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {

    const navigation = useNavigation()

    return (
      <div>
        <h2>Hello, I am at Home menu now!</h2>
        <Header></Header>
        {navigation.state === "loading" ? <p>Loading...</p> : <Outlet></Outlet>}

        <Footer></Footer>
      </div>
    );
};

export default Home;