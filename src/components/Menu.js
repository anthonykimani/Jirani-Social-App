import { Link } from "react-router-dom";

const Menu = () => {
    return ( 
        <div className="menu-container">
            <ul>
                <li><i class='bx bx-home bx-sm'></i><Link to={"/"}>Home</Link></li>
                <li><i class='bx bx-trending-up bx-sm'></i><Link to={"/trending"}>Trending</Link></li>
                <li><i class='bx bx-message-dots bx-sm'></i><Link to={"/messages"}>Messages</Link></li>
                <li><i class='bx bx-group bx-sm'></i><Link to={"/connections"}>Connections</Link></li>
                <li><i class='bx bx-cog bx-sm'></i><Link to={"/settings"}>Settings</Link></li>
            </ul>
        </div>
     );
}
 
export default Menu;