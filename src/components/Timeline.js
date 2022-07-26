import Stories from "./Stories";
import CreatePost from "./CreatePost";
import Posts from "./Posts";

const Timeline = () => {
    return ( 
        <div className="timeline-container">
            <Stories />
            <CreatePost />
            <Posts />
            <Posts />
        </div>
    );
}
 
export default Timeline;