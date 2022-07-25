const Navbar = () => {
    return ( 
        <div>
            <div className="logo-container">
                <h2>Jirani Social</h2>
            </div>
            <div className="search-bar-container">
                <i class='bx bx-search'></i>
                <input type="text" />
            </div>
            <div className="profile-container">
                <button className="create-button">Create</button>
                <img src="" alt="" />
            </div>
        </div>
     );
}
 
export default Navbar;