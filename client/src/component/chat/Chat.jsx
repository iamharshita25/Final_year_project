import './Chat.scss';
import { userdata } from '../../library/homedata';
import { useState } from 'react';

function Chat() {
    const [chat ,setChat]=useState(true)
    return (
        <div className="chat">
            <div className="messages">
                <h1>Message</h1>
                {[...Array(7)].map((_, index) => (
                    <div className="message" key={index} onClick={()=>setChat(true)}>
                        <img src="src/component/chat/user.jpg" alt="user" />
                        <span>{userdata.name}</span>
                        <p>Lorem ipsum, dolor sit amet consec</p>
                    </div>
                ))}
            </div>
            {chat&& 
            <div className="chatBox">
                <div className="top">
                    <div className="user">
                        <img src="src/component/chat/user.jpg" alt="user" />
                        <span>{userdata.name}</span>
                    </div>
                    <div className="close" onClick={()=>setChat(null)}>X</div>
                </div>
                <div className="center">
                    {[...Array(10)].map((_, index) => (
                        <div className={`chatMessage ${index % 2 === 0 ? 'own' : ''}`} key={index}>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <span>1 hour ago</span>
                        </div>
                    ))}
                </div>
                <div className="bottom">
                    <textarea></textarea>
                    <button>Send</button>
                </div>
            </div>}
        </div>
    );
}

export default Chat;
