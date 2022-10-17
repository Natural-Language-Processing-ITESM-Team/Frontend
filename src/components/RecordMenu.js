import { Paper } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import "../style/RecordMenu.css";
import axios from "axios";
import React, { useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";

const RecordMenu = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [recordingName, setRecordingName] = useState(0);
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true,
                            blobOptions: { type: 'audio/webm' },}, );

  const stopRecordingHandler = () => {
    const currentTimeSatmp = new Date().getTime();
    setRecordingName(currentTimeSatmp);
    return stopRecording();
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
                  console.log("He recibido respuesta de getTranscription");
                  console.log("La transcripción es ");
                  console.log(response);
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
    }

    
  };

  return (
    <Container sx={{ width: "25%", minWidth: 200 }}>
      <Stack spacing={1}>
        <Box textAlign="center">
          <Paper sx={{ height: 400 }}>hola</Paper>
        </Box>
        <Box textAlign="center">
          <div>
            <p>{status}</p>
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecordingHandler}>Stop Recording</button>
            {handleSubmission()}
            <video src={mediaBlobUrl} controls autoPlay loop />
            <p>
              <a href={mediaBlobUrl} download={recordingName}>
                Click to download
              </a>
            </p>
          </div>
        </Box>
      </Stack>
      <div>
        <input type="file" name="file" onChange={changeHandler} />
        <div>
          <button onClick={handleSubmission}>Submit</button>
        </div>
      </div>
    </Container>
  );
};

export default RecordMenu;
