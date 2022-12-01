import React from "react";
import '../chat.scss';
import IBM from "../img/watson.jpeg";
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

export const Powered = () => {
    return(
        <div className="powered">
            <div className="title">
                <h4>Powered by:</h4>
            </div>
            {
                sponsorInfo.map((item, index) => (
                    <div className="sponsors" key={index}>
                        <img src={item.img} alt="sp1"/>
                        <div className="sponsorInfo">
                            <span>{item.name}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}