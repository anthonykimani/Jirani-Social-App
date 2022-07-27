import Navbar from "../components/Navbar";
import Menu from "../components/Menu";

const Trending = ({darkMode,isDarkMode}) => {

    return ( 
        <div className="trending-container">
            <Navbar darkMode={darkMode} isDarkMode={isDarkMode} />
            <div className="trending-section">
                <Menu isDarkMode={isDarkMode} />
                
            </div>
        </div>
     );
}
 
export default Trending;