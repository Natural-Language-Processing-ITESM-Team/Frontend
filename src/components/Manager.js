import React, {useState} from 'react';
import axios from "axios";

export const Manager = () =>{

    const BACKEND_URL = 'https://hera-server.proyectos-vash-tec-cem.net/'

    const [input, setInput] = useState();
    const [text, setText] = useState([[]]);

    const getQueries = () => {
        setText([[]])
        axios({
            method: "post",
            url: `${BACKEND_URL}getUnclassifiedQueries`,
            data: {key: input},
            })
            .then(function (response) {
                setText(response['data']['unclassified_queries'])
            })
            .catch(function (response) {
                setText([["Credenciales Incorrectas"]])
            });
    }

    const changeCosts = () => {
        axios({
            method: "post",
            url: `${BACKEND_URL}`,
            data: {},
            headers: {
                "Content-Type": "application/json"
            },
            })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (response) {
                setText([["Credenciales Incorrectas"]])
            });
    }

    return(
            <div style={{color: "white", display: "flex", padding: "30px", flexDirection: "column", alignItems: "center"}}>
                <div>
                    <span>Clave de Manager: </span>
                    <input type="password" onChange={e=>setInput(e.target.value)}/>
                </div>
                <div style={{display: "flex"}}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <span style={{alignSelf: "center"}}>STT</span>
                        <select>
                            <option value="Transcribe">Amazon</option>
                            <option value="GoogleSTT">Google</option>
                            <option value="WatsonSTT">Watson</option>
                            <option value="AzureSTT">Azure</option>
                            <option value="NvidiaSTT">Nvidia</option>
                        </select>
                        <input type="number" placeholder="0.00"/>
                    </div>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <span style={{alignSelf: "center"}}>TTS</span>
                        <select>
                            <option value="Polly">Amazon</option>
                            <option value="GoogleTTS">Google</option>
                            <option value="WatsonTTS">Watson</option>
                            <option value="AzureTTS">Azure</option>
                        </select>
                        <input type="number" placeholder="0.00"/>
                    </div>
                </div>
                <button>Fijar Costos</button>
                <button onClick={getQueries}>Obtener Queries</button>
                <div>
                { text.map((item) => (
                <p>{item[0]} {item[1]}</p>
                 )) }
                </div>
            </div>
    );
};