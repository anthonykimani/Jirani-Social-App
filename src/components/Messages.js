import Message from "./Message";

const Messages = () => {
    return ( 
        <div className="message-container">
            <div className="message-header">
                <h4>Messages</h4>
                <i class='bx bx-edit' ></i>
            </div>
            <div className="search-messages-container">
                <i class='bx bx-search bx-fw'></i>
                <input type="text" placeholder="Search for messages , posts" />
            </div>
            <div className="message-section">
                <div className="message-type">
                    <p>Primary</p>
                    <p>General</p>
                    <p>Requests</p>
                </div>
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
            </div>
        </div>
     );
}
 
export default Messages;