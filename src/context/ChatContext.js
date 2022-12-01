import React, { createContext, useState } from "react";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {

    const [message, setMessage] = useState(['Hola soy Hera, puedes preguntarme sobre las ingenierías en el tec, el proceso de admisión o tus oportunidades como exatec.']);
    const [owner, setOwner] = useState(['message']);
    const [topic, setTopic] = useState(-2);
    const [waiting, setWaiting] = useState();
    const [time, setTime] = useState(['']);

    return(
        <ChatContext.Provider value={[message, setMessage, owner, setOwner, topic, setTopic, waiting, setWaiting, time, setTime]}>
            {children}
        </ChatContext.Provider>
    )
};