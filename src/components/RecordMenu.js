import { Container, Stack } from "@mui/system";
import "../style/RecordMenu.css"; 
import axios from "axios";
import React, { useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import { FaUser } from "react-icons/fa";
import { CiMicrophoneOn } from 'react-icons/ci'
import { BsStop } from 'react-icons/bs'
import SpinningCircles from "react-loading-icons/dist/esm/components/spinning-circles";
import TailSpin from "react-loading-icons/dist/esm/components/tail-spin";

const RecordMenu = () => {
  const botname = 'Hera';
  var audio = new Audio();
  const [message, setMessage] = useState('- Hola mi nombre es\n'+botname+', cómo te puedo ayudar?');
  const [recordingName, setRecordingName] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [waitingForResponse, setWaitingForResponse] = useState(false);
  const { status, startRecording, stopRecording, mediaBlobUrl, clearBlobUrl} =
    useReactMediaRecorder({ audio: true,
                            blobOptions: { type: 'audio/webm' },
                            onStop: (blobUrl, blob) => {handleSubmission(blobUrl)}}, );

  const handleRecordingClick = () => {
    console.log("status is");
    console.log(status);
    if(status === 'idle' || status === 'stopped') {
      startRecording();
      setIsRecording(true);
      //clearBlobUrl();
    } else {
      const currentTimeSatmp = new Date().getTime();
      
      setRecordingName(currentTimeSatmp);
      setIsRecording(false);
      stopRecording();
    
    }
  };


  const handleSubmission = (blobUrl) => {

    fetch(blobUrl)
      .then((res) => res.blob())
      .then((mediaBlob) => {

        setWaitingForResponse(true);

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
            

            // TODO SEND THE CHOSEN STT MEASURE TO DECIDE WHICH SERVICE.
            const toGoJson = JSON.stringify({ key: localStorage.getItem("key"), sttMeasure: STTMeasure});
            // I call backend to decide which transcribe service to use.
            // The file key I know it, it's stored in localStorage.get("key")
            axios({
              method: "post",
              url: "http://107.21.53.64:8000/getTranscription", // Change to REAL SERVER ADDRESS.
              data: toGoJson,
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
                audio = new Audio(response['data']['link']);
                setMessage('- '+response['data']['text'])
                audio.play()
                clearBlobUrl();

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

  // Initial state
  const getInitialState = () => {
    const STTMeasure = "Latencia";
    return STTMeasure;
  };

  const [STTMeasure, setSTTMeasure] = useState(getInitialState);

  const handleChange = (e) => {
    setSTTMeasure(e.target.value);
  };

  return (


      <div className='container'>

        <p>{`Por favor seleccione una opción para determinar su servicio de voz a texto.`}</p>
        <select value={STTMeasure} onChange={handleChange}>
          <option value="Latencia">Latencia</option>
          <option value="Exactitud">Exactitud</option>
          <option value="Costo">Costo</option>
        </select>

      <Stack spacing={1} className='chatbox'>
        <div className="topbar">
          <FaUser/> Asistencia
        </div>
        <div className="chat">
          <p>{message}</p>
          <div className="loading-icon">
          { waitingForResponse ? <TailSpin stroke="#6390ff"/>:<div></div>}
          </div>
        </div>
        <div className='flex-container'>
          <div className="button-holder">
          { isRecording ? 
            <button className="stop-recording" onClick={() => {
              handleRecordingClick();
              //handleSubmission();
              return;
            }}><BsStop/>Dejar de Grabar</button>:
            <button className="start-recording" onClick={handleRecordingClick}><CiMicrophoneOn/>Responder</button> }
          </div>
        </div>
      </Stack>
    </div>
  );
};

export default RecordMenu;
