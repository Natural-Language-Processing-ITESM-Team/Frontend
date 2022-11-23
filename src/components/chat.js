import React from "react";
import '../chat.scss';
import { ChatContextProvider } from "../context/ChatContext";
import { ChatContainer } from "./ChatContainer";
import { SideBar } from "./ChatSideBar";

export const Chat = () =>{
    
    return(
        <div className="home">
            <div className="container">
                <ChatContextProvider>
                    <SideBar />
                    <ChatContainer />
                </ChatContextProvider>
            </div>
        </div>
    )
}