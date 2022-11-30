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

    const[message, setMessage, owner, setOwner, topic, setTopic] = useContext(ChatContext);
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
            console.log("Audio submited")

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
                console.log(response);
                audio = new Audio(response['data']['audio_response_link']);
                audio.play();
                handleHera(response['data']['text_for_client'])
                setTopic(response['data']['topic'])
                console.log(`topic: ${topic}`)
            })
            .catch(function (response) {
                console.log("error when calling getTranscription");
                console.log(response);
            });
        })
        .catch(function (response) {
            console.log("Error al subir el audio")
        });
    })
    .catch(function (response) {
        console.log("error al crear archivo de mediaBlob");
    });
    };

    const handleTextSubmission = () => {
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
                console.log(`topic: ${topic}`);
            })
            .catch(function (response) {
                console.log(response);
            });
    };

    // Initial state
    const getInitialStateSTT = () => {
        const STTMeasure = "Latencia";
        return STTMeasure;
    };

    const getInitialStateTTS = () => {
        const TTSMeasure = "Latencia";
        return TTSMeasure
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
                        <option value="" selected disabled>STT</option>
                        <option value="Latencia">Latencia</option>
                        <option value="Exactitud">Exactitud</option>
                        <option value="Costo">Costo</option>
                        <option value="Transcribe">Transcribe</option>
                        <option value="GoogleSTT">GoogleSTT</option>
                        <option value="WatsonSTT">WatsonSTT</option>
                        <option value="AzureSTT">AzureSTT</option>
                    </select>

                    <select value={TTSMeasure} onChange={handleChangeTTS}>
                        <option value="" selected disabled>TTS</option>
                        <option value="Latencia">Latencia</option>
                        <option value="Costo">Costo</option>
                        <option value="Polly">Polly</option>
                        <option value="GoogleTTS">GoogleTTS</option>
                        <option value="WatsonTTS">WatsonTTS</option>
                        <option value="AzureTTS">AzureTTS</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
