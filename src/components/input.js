import React, { useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import SpinningCircles from "react-loading-icons/dist/esm/components/spinning-circles";
import TailSpin from "react-loading-icons/dist/esm/components/tail-spin";
import axios from "axios";
import "../chat.scss"

export const Input = () => {

    const botname = 'Hera';
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [message, setMessage] = useState('- Hi my name is '+botname+', how can I help you?');
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

    setWaitingForResponse(true);

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
            // lts fckng go
            console.log(
            "La solicitud se procesó exitosamente pero no hay response por eso se manda error 204."
            );
            //console.log(response);
            
            const keyJson = JSON.stringify({ key: localStorage.getItem("key") });
            // I call backend to decide which transcribe service to use.
            // The file key I know it, it's stored in localStorage.get("key")
            axios({
            method: "post",
            url: "http://34.27.178.124:8000/getTranscription", // Change to REAL SERVER ADDRESS.
            data: keyJson,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            })
            .then(function (response) {
                setWaitingForResponse(false);
                console.log("He recibido respuesta de getTranscription");
                console.log("La transcripción es ");
                console.log(response);
                audio = new Audio(response['data']);
                audio.play();
                // if( 'messages' in response['data']) {
                // setMessage(response['data']['messages'][0]['content']);
                // } else {
                // setMessage("I didn't understand");
                // }

            })
            .catch(function (response) {
                setWaitingForResponse(false);
                console.log("error when calling getTranscription");
                console.log(response);
            });
        });

    })
    .catch(function (response) {
        setWaitingForResponse(false);
        console.log("error al crear archivo de mediaBlob");
        console.log(response);
    });
};

    return(
        <div className="input">
            <input type="text" placeholder="Escribe algo..." />
            <div className="send">
                <button>Enviar</button>
                {
                isRecording ? 
                    <button className="stop-recording" style={{backgroundColor: "red"}} onClick={handleRecordingClick}>Detener</button> :
                    <button className="start-recording" onClick={handleRecordingClick}>Grabar</button>
                }
            </div>
        </div>
    )
}