import "./Home.css";
import {Link} from "react-router-dom";

const Home = () => {
    return ( 
        <div className="home">
            <h1>Welcome to iPlayStation</h1>
            <div className="button">
                <button> <Link to={"/consoles"}>Click Here to Start</Link></button>
            </div>
        </div>
     );
}
 
export default Home;