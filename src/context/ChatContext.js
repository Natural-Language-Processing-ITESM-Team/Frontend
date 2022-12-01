import React, { createContext, useState } from "react";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
    const [message, setMessage] = useState(['Hola soy Hera, ¿cómo puedo ayudarte?']);
    const [owner, setOwner] = useState(['message']);
    const [topic, setTopic] = useState(-2);
    const [waiting, setWaiting] = useState()

    return(
        <ChatContext.Provider value={[message, setMessage, owner, setOwner, topic, setTopic, waiting, setWaiting]}>
            {children}
        </ChatContext.Provider>
    )
};