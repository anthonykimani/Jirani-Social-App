import profilePic from '../images/profile.jpg'


const Navbar = ({darkMode,isDarkMode}) => {

    return ( 
        <div className="navbar-container" style={isDarkMode?{backgroundColor:"var(--bg-dark-color)"}:{backgroundColor:"var(--bg-light-color"}}>
            <div className="logo-container">
                <h2 style={isDarkMode?{color:"var(--bg-light-color)"}:{color:"var(--bg-dark-color"}}>Jirani Connect</h2>
            </div>
            <div className="search-bar-container">
                <i className='bx bx-search bx-fw'></i>
                <input type="text" placeholder="Search for friends , posts" />
            </div>
            <div className="profile-container">
                <i class={isDarkMode?"bx bx-sun bx-sm":"bx bx-moon bx-sm"} onClick={darkMode} style={isDarkMode?{color:"var(--bg-light-color)"}:{color:"var(--bg-dark-color"}}></i>
                <button className="create-button">Create</button>
                <img src={profilePic} alt="" />
            </div>
        </div>
     );
}
 
export default Navbar;