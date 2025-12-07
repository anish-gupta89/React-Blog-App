import { Link } from "react-router-dom/cjs/react-router-dom";

const NotFound = () => {
    return (  
        <div className="not-found">
            <h1>Sorry Buddy !!!!!</h1>
            <p> The page you are searching for is not aviablable....</p>
            <Link to="/">Go to Home Page</Link>
        </div>
    );
}
 
export default NotFound;