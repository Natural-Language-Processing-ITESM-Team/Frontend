import React from "react";
import '../chat.scss';
import { Input } from "./input";
import { Messages } from "./messages";
import IBM from "../img/IBM.jpeg";
import LEX from "../img/LEX.jpeg";
import Azure from "../img/Azure.jpeg";
import NVIDIA from "../img/NVIDIA.jpeg";

const sponsorInfo = [
    {
        name: 'Amazon Lex',
        img: LEX
    },
    {
        name: 'Google Dialogflow',
        img: 'https://uploads-ssl.webflow.com/625540b970bc1b4035617258/626a7bb93caa2c15a7f9a842_5fce9fd1f6fb5b54ff32b290_dialogflow.jpeg'
    },
    {
        name: 'IBM Watson',
        img: IBM
    },
    {
        name: "Microsoft Azure",
        img: Azure
    },
    {
        name:"NVIDIA Nemo",
        img: NVIDIA
    }

]

export const ChatContainer = () =>{
    return(
        <div className="chatcontainer">
            <div className="chatInfo">
                <span>HERA</span>
                <div className="chatContacts">
                    {
                        sponsorInfo.map((item, index) =>(
                            <img key = {index} src={item.img} alt={item.name}/>
                        ))
                    }
                </div>
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