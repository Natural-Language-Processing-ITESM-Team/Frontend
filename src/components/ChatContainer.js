import React from "react";
import '../chat.scss';
import { Input } from "./input";
import { Messages } from "./messages";

const sponsorInfo = [
    {
        name: 'Amazon Lex',
        img: 'https://symbols.getvecta.com/stencil_7/2_amazon-polly.9eace78874.jpg'
    },
    {
        name: 'Google Dialogflow',
        img: 'https://uploads-ssl.webflow.com/625540b970bc1b4035617258/626a7bb93caa2c15a7f9a842_5fce9fd1f6fb5b54ff32b290_dialogflow.jpeg'
    },
    {
        name: 'IBM Watson',
        img: 'https://www.pngitem.com/pimgs/m/212-2120270_ibm-watson-logo-png-ibm-watson-png-transparent.png'
    },
    {
        name: "Microsoft Azure",
        img: 'https://swimburger.net/media/0zcpmk1b/azure.jpg'
    },
    {
        name:"NVIDIA Nemo",
        img: "https://i.etsystatic.com/23511185/r/il/e056a3/2384976935/il_570xN.2384976935_56zr.jpg"
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