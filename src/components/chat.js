import React from "react";
import '../chat.scss';
import { ChatContainer } from "./ChatContainer";
import { SideBar } from "./ChatSideBar";

export const Chat = () =>{
    
    return(
        <div className="home">
            <div className="container">
                <SideBar />
                <ChatContainer />
            </div>
        </div>
    )
}