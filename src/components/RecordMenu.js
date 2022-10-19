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
  const botname = '';
  const audio = new Audio();
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [message, setMessage] = useState('- Hi my name is '+botname+', how can I help you?');
  const [recordingName, setRecordingName] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [waitingForResponse, setWaitingForResponse] = useState(false);
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true,
                            blobOptions: { type: 'audio/webm' },}, );

  const handleRecordingClick = () => {
    if(status === 'idle' || status === 'stopped') {
      startRecording();
      setIsRecording(true);
    } else {
      const currentTimeSatmp = new Date().getTime();
      setRecordingName(currentTimeSatmp);
      stopRecording();
      setIsRecording(false);
      handleSubmission();
    }
  };

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
    if (mediaBlobUrl == undefined) {
      // wait for recording to stop.
      console.log("recording undefined");
      return;
    } else {
      setWaitingForResponse(true);

      fetch(mediaBlobUrl)
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
                url: "http://localhost:8000/getTranscription", // Change to REAL SERVER ADDRESS.
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
                  audio = new Audio(response);
                  audio.play()

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
    }

    
  };

  return (
    <Container>
      <Stack spacing={1} className='chatbox'>
        <div className="topbar">
          <FaUser/> Assistance
        </div>
        <div className="chat">
          <p>{message}</p>
          <div className="loading-icon">
          { waitingForResponse ? <TailSpin stroke="#6390ff"/>:<div></div>}
          </div>
        </div>
        <div class='flex-container'>
          <div className="button-holder">
          { isRecording ? 
            <button className="stop-recording" onClick={handleRecordingClick}><BsStop/>Stop Recording</button>:
            <button className="start-recording" onClick={handleRecordingClick}><CiMicrophoneOn/>Start Recording</button> }
          </div>
        </div>
      </Stack>
    </Container>
  );
};

export default RecordMenu;
