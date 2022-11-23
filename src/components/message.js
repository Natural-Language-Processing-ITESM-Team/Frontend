import React, { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

export const Message = () => {

    const[message, setMessage, owner, setOwner] = useContext(ChatContext);
    const today = new Date();
    const time = today.getHours() + ':' + today.getMinutes();

    return(
        <>
        {
            message.map((item, index) => (
                <div className={owner[index]} key={index}>
                    <div className="messageInfo">
                        <img src="https://cdn.dribbble.com/users/279657/screenshots/2701628/chatbot.png" alt="hera"/>
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