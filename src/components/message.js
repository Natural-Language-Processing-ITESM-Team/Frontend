import React, { useContext, useEffect, useRef } from "react";
import { ChatContext } from "../context/ChatContext";

export const Message = () => {

    const[message, setMessage, owner, setOwner, topic, setTopic, waiting, setWaiting, time, setTime] = useContext(ChatContext);
    const today = new Date();
    //const time = today.getHours() + ':' + today.getMinutes();

    const CHATBOT_LOGO = "https://cdn.dribbble.com/users/279657/screenshots/2701628/chatbot.png"
    const USER_LOGO = "https://cdn-icons-png.flaticon.com/512/149/149071.png"

    //const ref = useRef()

    //useEffect(()=>{
    //    ref.current?.scrollIntoView({behavior:"smooth"});
    //}, [message]);

    return(
        <>
        {
            message.map((item, index) => (
                <div /*ref={ref}*/ className={owner[index]} key={index}>
                    <div className="messageInfo">
                        { owner[index] === "message" ? <img src={CHATBOT_LOGO} alt="hera"/> : <img src={USER_LOGO} alt="user"/>}
                        <span>{time[index]}</span>
                    </div>
                    <div className="messageContent">
                        <p>{item}</p>
                    </div>
                </div>
            ))

        }
        {waiting?
            <div className="message">
                <div className="messageInfo">
                    <img src={CHATBOT_LOGO} alt="hera"/>
                </div>
                <div className="messageContent">
                    <img src="https://media.tenor.com/vXnmG74PsvUAAAAM/oop-tehe.gif" alt="waiting"/>
                </div>
            </div> : <div></div>}
        </>
    )
}