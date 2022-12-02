import React from "react";
import '../chat.scss';
import IBM from "../img/watson.jpeg";
import LEX from "../img/LEX.jpeg";
import Azure from "../img/Azure.jpeg";
import NVIDIA from "../img/NVIDIA.jpeg";

const sponsorInfo = [
    {
        name: 'Amazon Lex',
        img: LEX,
        link: 'https://aws.amazon.com/es/lex/'
    },
    {
        name: 'Google Dialogflow',
        img: 'https://uploads-ssl.webflow.com/625540b970bc1b4035617258/626a7bb93caa2c15a7f9a842_5fce9fd1f6fb5b54ff32b290_dialogflow.jpeg',
        link: 'https://cloud.google.com/dialogflow'
    },
    {
        name: 'IBM Watson',
        img: IBM,
        link: 'https://www.ibm.com/mx-es/products/watson-assistant/docs-resources'
    },
    {
        name: "Microsoft Azure",
        img: Azure,
        link: 'https://azure.microsoft.com/es-es/products/bot-services/'
    },
    {
        name:"NVIDIA Nemo",
        img: NVIDIA,
        link: 'https://developer.nvidia.com/nvidia-nemo'
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
                            <a href={item.link} target="_blank"><span>{item.name}</span></a>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}