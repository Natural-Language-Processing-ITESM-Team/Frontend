import React, { useContext, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import SpinningCircles from "react-loading-icons/dist/esm/components/spinning-circles";
import TailSpin from "react-loading-icons/dist/esm/components/tail-spin";
import axios from "axios";
import "../chat.scss"
import { ChatContext } from "../context/ChatContext";

export const Input = () => {
    const BACKEND_IP = '104.198.14.95'

    const[message, setMessage, owner, setOwner] = useContext(ChatContext);
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

        const myFile = new File([mediaBlob], "demo.webm", {
        type: "audio/webm",
        });
        console.log("Logré guardar blob en archivo");
        console.log(myFile);
        
        // upload the audio file into amazon S3 bucket.
        const form = new FormData();

        const keyPrefix = "transcribe/"

        form.append("key", keyPrefix + myFile.name);
        localStorage.setItem("key", keyPrefix + myFile.name);
        form.append("acl", "public-read");
        form.append("file", myFile);

        axios({
        method: "post",
        url: "http://buketa.s3.amazonaws.com/",
        data: form,
        headers: { "Content-Type": "multipart/form-data" },
        })
        .then(function (response) {
            //handle success
            //console.log(response);
        })
        .catch(function (response) {
            console.log(
            "La solicitud se procesó exitosamente pero no hay response por eso se manda error 204."
            );
            //console.log(response);
            
            const toGoJson = JSON.stringify({ key: localStorage.getItem("key"), sttMeasure: STTMeasure, ttsMeasure: TTSMeasure});
            // I call backend to decide which transcribe service to use.
            // The file key I know it, it's stored in localStorage.get("key")
            axios({
            method: "post",
            url: `http://${BACKEND_IP}:8000/getTranscription`, // Change to REAL SERVER ADDRESS.
            
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
            })
            .catch(function (response) {
                console.log("error when calling getTranscription");
                console.log(response);
            });
        });

    })
    .catch(function (response) {
        console.log("error al crear archivo de mediaBlob");
        console.log(response);
    });
    };

    const handleTextSubmission = () => {
        axios({
            method: "post",
            url: `http://${BACKEND_IP}:8000/utterTextFromText`, // Change to REAL SERVER ADDRESS.
            
            data: {"clientQuery": text},
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            })
            .then(function (response) {
                //console.log(response);
                handleHera(response['data'])
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

                <select value={STTMeasure} onChange={handleChangeSTT}>
                    <option value="Latencia">Latencia</option>
                    <option value="Exactitud">Exactitud</option>
                    <option value="Costo">Costo</option>
                </select>

                <select value={TTSMeasure} onChange={handleChangeTTS}>
                    <option value="Latencia">Latencia</option>
                    <option value="Costo">Costo</option>
                </select>
            </div>
        </div>
    )
}