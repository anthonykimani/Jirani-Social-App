import blackModel from "../images/close-up-model-wearing-make-up.jpg"
import effielTower from "../images/close-up-picnic-near-eiffel-tower.jpg"
import summer from "../images/summer-time-beach-night.jpg"
import blackLady from  "../images/young-woman-wearing-orange-dress-with-turban-ethnic-jewelry.jpg"

const Posts = () => {
    return ( 
        <div className="posts-container">
            <div className="post-header">
                <div className="post-header-profile">
                    <img src={blackLady} alt="" />
                    <div>
                        <h4>Antony Kimani</h4>
                        <p>Nairobi,16 mins ago</p>
                    </div>
                </div>
                <div className="post-header-text">
                    <i class='bx bx-dots-horizontal-rounded bx-sm'></i>
                </div>
            </div>
            <div className="post-image">
                <img src={summer} alt="" />
            </div>
            <div className="post-icons">
                <div className="post-icons-left">
                    <i class='bx bx-heart bx-sm' ></i>
                    <i class='bx bx-message-square-dots bx-sm' ></i>
                    <i class='bx bx-share-alt bx-sm' ></i>
                </div>
                <div className="post-icons-right">
                    <i class='bx bx-bookmark bx-sm' ></i>
                </div>
            </div>
            <div className="post-icons-paragraph-text">
                <div className="post-icons-likes">
                    <div className="post-likes-img">
                        <img src={blackModel} alt="" />
                        <img src={blackLady} alt="" />
                        <img src={effielTower} alt="" />
                    </div>
                    <div className="post-likes-text">
                        <p>liked by TechBro,Jordan and Elon</p>
                    </div>
                </div>
                <div className="post-comments-container">
                    <div className="post-comments">
                        <p>I love the photo</p>
                    </div>
                    <div className="post-add-comments">
                        <input type="text" placeholder="Add comment"/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Posts;