import Navbar from "../components/Navbar";
import Interactions from '../components/Interactions';
import Timeline from '../components/Timeline';
import Menu from '../components/Menu';

const Home = () => {
    return ( 
        <div>
            <Navbar />
            <div className="home-container">
                <Menu />
                <Timeline />
                <Interactions />
            </div>
        </div>
     );
}
 
export default Home;