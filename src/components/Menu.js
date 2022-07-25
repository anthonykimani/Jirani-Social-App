import { Link } from "react-router-dom";

const Menu = () => {
    return ( 
        <div className="menu-container">
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/trending"}>Trending</Link></li>
                <li><Link to={"/messages"}>Messages</Link></li>
                <li><Link to={"/connections"}>Connections</Link></li>
                <li><Link to={"/settings"}>Settings</Link></li>
            </ul>
        </div>
     );
}
 
export default Menu;