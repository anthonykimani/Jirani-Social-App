import profilePic from '../images/profile.jpg'

const Navbar = () => {
    return ( 
        <div className="navbar-container">
            <div className="logo-container">
                <h2>Jirani Connect</h2>
            </div>
            <div className="search-bar-container">
                <i class='bx bx-search bx-fw'></i>
                <input type="text" placeholder="Search for friends , posts" />
            </div>
            <div className="profile-container">
                <button className="create-button">Create</button>
                <img src={profilePic} alt="" />
            </div>
        </div>
     );
}
 
export default Navbar;