import React, { useContext, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import SpinningCircles from "react-loading-icons/dist/esm/components/spinning-circles";
import TailSpin from "react-loading-icons/dist/esm/components/tail-spin";
import axios from "axios";
import "../chat.scss"
import { ChatContext } from "../context/ChatContext";
import uuid from 'react-uuid';

export const Input = () => {
    const BACKEND_URL = 'https://hera-server.proyectos-vash-tec-cem.net/'
    const date = new Date();

    const[message, setMessage, owner, setOwner, topic, setTopic, waiting, setWaiting, time, setTime] = useContext(ChatContext);
    const [text, setText] = useState("");

    const botname = 'Hera';
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    // const [message, setMessage] = useState('- Hi my name is '+botname+', how can I help you?');
    const [recordingName, setRecordingName] = useState(0);
    const [isRecording, setIsRecording] = useState(false);
    const [waitingForResponse, setWaitingForResponse] = useState(false);
    const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true,
                            blobOptions: { type: 'audio/webm' }, onStop: (blobUrl, blob) => {handleSubmission(blobUrl)}}, );

    // , mediaRecorderOptions: { onStop : handleSubmission }

    var audio;

    const handleRecordingClick = () => {
    if(status === 'idle' || status === 'stopped') {
        startRecording();
        setIsRecording(true);
    } else {
        const currentTimeSatmp = new Date().getTime();
        setRecordingName(currentTimeSatmp);
        stopRecording();
        setIsRecording(false);
        // handleSubmission();
        setWaiting(true);
    }
    };

    const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
    };

    const handleSubmission = (blobUrl) => {
    
    fetch(blobUrl)
    .then((res) => res.blob())
    .then((mediaBlob) => {

        const myFile = new File([mediaBlob], `${getUUID()}_audio.webm`, {
        type: "audio/webm",
        });
        
        // upload the audio file to backend
        const form = new FormData();

        const keyPrefix = "transcribe/"

        form.append("key", keyPrefix + myFile.name);
        localStorage.setItem("key", keyPrefix + myFile.name);
        form.append("acl", "public-read");
        form.append("file", myFile);

        axios({
        method: "post",
        url: `${BACKEND_URL}uploadFile`,
        data: form,
        headers: { "Content-Type": "multipart/form-data" },
        })
        .then(function (response) {
            
            const toGoJson = JSON.stringify({ key: localStorage.getItem("key"), sttMeasure: STTMeasure, ttsMeasure: TTSMeasure, clientID: getUUID(), topic: topic});

            axios({
            method: "post",
            url: `${BACKEND_URL}getTranscription`,
            data: toGoJson,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            })
            .then(function (response) {
                audio = new Audio(response['data']['audio_response_link']);
                audio.play();
                handleHera(response['data']['text_for_client'])
                setTopic(response['data']['topic'])
                setWaiting(false);
            })
            .catch(function (response) {
                console.log("error when calling getTranscription");
                console.log(response);
                setWaiting(false);
            });
        })
        .catch(function (response) {
            console.log("Error al subir el audio")
            setWaiting(false);
        });
    })
    .catch(function (response) {
        console.log("error al crear archivo de mediaBlob");
        setWaiting(false);
    });
    };

    const handleTextSubmission = () => {
        setWaiting(true)
        axios({
            method: "post",
            url: `${BACKEND_URL}utterTextFromText`, // Change to REAL SERVER ADDRESS.
            data: {"clientQuery" : text, "clientID" : getUUID(), "topic" : topic},
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            })
            .then(function (response) {
                //console.log(response);
                handleHera(response['data']['text_for_client'])
                setTopic(response['data']['topic'])
                setWaiting(false);
            })
            .catch(function (response) {
                console.log(response);
                setWaiting(false);
            });
    };

    // Initial state
    const getInitialStateSTT = () => {
        const STTMeasure = "Latencia";
        return STTMeasure;
    };

    const getInitialStateTTS = () => {
        const TTSMeasure = "Latencia";
        return TTSMeasure;
    }

    const [STTMeasure, setSTTMeasure] = useState(getInitialStateSTT);
    const [TTSMeasure, setTTSMeasure] = useState(getInitialStateTTS);

    const handleChangeSTT = (e) => {
        setSTTMeasure(e.target.value);
    };

    const handleChangeTTS = (e) => {
        setTTSMeasure(e.target.value);
    };

    const handleSend = () => {
        if(text !== ""){
            setMessage(message => [...message, text])
            setOwner(owner => [...owner, 'message owner'])
            setTime(time => [...time, date.getHours() + ':' + date.getMinutes()])
            handleTextSubmission()
            setText("")
        }
    };

    const handleKeyPress = e => {
        if(e.key === 'Enter'){
            handleSend();
        }
    }

    const handleHera = (heraText) => {
            setMessage(message => [...message, heraText])
            setOwner(owner => [...owner, 'message'])
            setTime(time => [...time, date.getHours() + ':' + date.getMinutes()])
            setText("")
    };

    const getUUID = () => {
        if (localStorage.getItem("uuid") === null){
            localStorage.setItem("uuid", uuid())
        }
        return localStorage.getItem("uuid")
    }

    return(
        <div className="input">
            <input type="text" placeholder="Escribe algo..." onChange={e=>setText(e.target.value)} value={text} onKeyPress={handleKeyPress}/>
            <div className="send">
                <button onClick={handleSend}>
                    <i className="ri-send-plane-line"></i>
                </button>
                {
                isRecording ? 
                    <button className="stop-recording" style={{backgroundColor: "#5339e4"}} onClick={handleRecordingClick}><i className="ri-stop-circle-line"></i></button> :
                    <button className="start-recording" onClick={handleRecordingClick}><i className="ri-mic-fill"></i></button>
                }

                <div className="select">
                    <select value={STTMeasure} onChange={handleChangeSTT}>
                        <option value="" selected>STT</option>
                        <option value="Latencia">Latencia</option>
                        <option value="Exactitud">Exactitud</option>
                        <option value="Costo">Costo</option>
                        <option value="Transcribe">Amazon</option>
                        <option value="GoogleSTT">Google</option>
                        <option value="WatsonSTT">Watson</option>
                        <option value="AzureSTT">Azure</option>
                        <option value="NvidiaSTT">Nvidia</option>
                    </select>

                    <select value={TTSMeasure} onChange={handleChangeTTS}>
                        <option value="" selected>TTS</option>
                        <option value="Latencia">Latencia</option>
                        <option value="Costo">Costo</option>
                        <option value="Polly">Amazon</option>
                        <option value="GoogleTTS">Google</option>
                        <option value="WatsonTTS">Watson</option>
                        <option value="AzureTTS">Azure</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
