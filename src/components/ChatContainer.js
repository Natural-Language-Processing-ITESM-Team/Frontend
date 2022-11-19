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
                    <img src="https://icons.veryicon.com/png/o/miscellaneous/mobile-aone/question-mark-12.png" alt="questions" />
                    <img src="https://cdn-icons-png.flaticon.com/512/152/152529.png" alt="more"/>
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}