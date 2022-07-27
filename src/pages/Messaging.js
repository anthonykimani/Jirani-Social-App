import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Texts from "../components/Texts";

const Messaging = ({isDarkMode,darkMode}) => {
    return ( 
        <div className="message-page-container">
            <Navbar darkMode={darkMode} isDarkMode={isDarkMode} />
            <div className="message-page-section">
                <Menu isDarkMode={isDarkMode} />
                <Texts isDarkMode={isDarkMode} />
            </div>
        </div>
     );
}
 
export default Messaging;