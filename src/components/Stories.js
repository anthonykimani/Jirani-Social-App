import blackModel from "../images/close-up-model-wearing-make-up.jpg"
import effielTower from "../images/close-up-picnic-near-eiffel-tower.jpg"
import summer from "../images/summer-time-beach-night.jpg"
import blackLady from  "../images/young-woman-wearing-orange-dress-with-turban-ethnic-jewelry.jpg"

const Stories = () => {
    return ( 
        <div className="stories-container">
            <img src={blackModel} alt="" />
            <img src={effielTower} alt="" />
            <img src={summer} alt="" />
            <img src={blackLady} alt="" />
            <img src={blackModel} alt="" />
            <img src={summer} alt="" />
        </div>
     );
}
 
export default Stories;