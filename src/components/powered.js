import React from "react";
import '../chat.scss';

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