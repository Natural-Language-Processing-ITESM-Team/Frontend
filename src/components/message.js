import React, { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

export const Message = () => {

    const[message, setMessage, owner, setOwner] = useContext(ChatContext);
    const today = new Date();
    const time = today.getHours() + ':' + today.getMinutes();

    const CHATBOT_LOGO = "https://cdn.dribbble.com/users/279657/screenshots/2701628/chatbot.png"
    const USER_LOGO = "https://cdn-icons-png.flaticon.com/512/149/149071.png"

    return(
        <>
        {
            message.map((item, index) => (
                <div className={owner[index]} key={index}>
                    <div className="messageInfo">
                        { owner[index] === "message" ? <img src={CHATBOT_LOGO} alt="hera"/> : <img src={USER_LOGO} alt="user"/>}
                        <span>{time}</span>
                    </div>
                    <div className="messageContent">
                        <p>{item}</p>
                    </div>
                </div>
            ))
        }
        </>
    )
}