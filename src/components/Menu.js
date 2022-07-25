import { Link } from "react-router-dom";

const Menu = () => {
    return ( 
        <div className="menu-container">
            <ul>
                <li><Link to={"/"} className="link"><i class='bx bx-home bx-sm'></i>Home</Link></li>
                <li><Link to={"/trending"} className="link"><i class='bx bx-trending-up bx-sm'></i>Trending</Link></li>
                <li><Link to={"/messages"} className="link"><i class='bx bx-message-dots bx-sm'></i>Messages</Link></li>
                <li><Link to={"/connections"} className="link"><i class='bx bx-group bx-sm'></i>Connections</Link></li>
                <li><Link to={"/settings"} className="link"><i class='bx bx-cog bx-sm'></i>Settings</Link></li>
            </ul>
        </div>
     );
}
 
export default Menu;