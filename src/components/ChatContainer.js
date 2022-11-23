import React from "react";
import '../chat.scss';
import { Input } from "./input";
import { Messages } from "./messages";

export const ChatContainer = () =>{
    return(
        <div className="chatcontainer">
            <div className="chatInfo">
                <span>HERA</span>
                <div className="chatIcons">
                    <i className="ri-questionnaire-line"></i>
                    <i className="ri-more-2-line"></i>
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}