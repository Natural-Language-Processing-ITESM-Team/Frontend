import React, { createContext, useState } from "react";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
    const [message, setMessage] = useState(['Hola soy Hera, ¿cómo puedo ayudarte?']);
    const [owner, setOwner] = useState(['message'])

    return(
        <ChatContext.Provider value={[message, setMessage, owner, setOwner]}>
            {children}
        </ChatContext.Provider>
    )
};