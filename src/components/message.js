import React, { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

export const Message = () => {

    const message = useContext(ChatContext);
    const today = new Date();
    const time = today.getHours() + ':' + today.getMinutes();

    return(
        <>
        {
            message[0].map((item, index) => (
                <div className="message" key={index}>
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

{
            message[0].map((item, index) => (
                <div className="message owner" key={index}>
                    <div className="messageInfo">
                        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="hera"/>
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