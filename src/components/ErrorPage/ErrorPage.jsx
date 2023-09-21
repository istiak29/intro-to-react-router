import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    
    console.log(error)

    return (
      <div>
        <h1>Oppsss !!!</h1>
        <p>{error.statusText || error.message}</p>

        {error.status === 404 && (
          <div>
            <h3>Page Not Found</h3>
            <h6>Go Back</h6>
            <Link to={'/'}>
              <button>Home</button>
            </Link>
          </div>
        )}
      </div>
    );
};

export default ErrorPage;