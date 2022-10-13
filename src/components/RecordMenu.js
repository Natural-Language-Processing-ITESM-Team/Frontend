import { Button, ButtonGroup , Paper} from '@mui/material'
import { Box, Container, Stack } from '@mui/system';
import '../style/RecordMenu.css'
import axios from "axios";
import React, {useState} from 'react';


const RecordMenu = () => {

    const [selectedFile, setSelectedFile] = useState();
  	const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
    		setIsFilePicked(true);
    }

    const handleSubmission = () => {
        // I upload the audio file into amazon S3 bucket.
        const form = new FormData();
        
        const keyPrefix = "transcribe/"

        form.append("key", keyPrefix + "${filename}");
        localStorage.setItem("key", keyPrefix + selectedFile.name);
        form.append("acl", "public-read");
        form.append("file", selectedFile);
    
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
            console.log("La solicitud se procesó exitosamente pero no hay response por eso se manda error 204.")            
            //console.log(response);
            
            const keyJson = JSON.stringify({"key": localStorage.getItem("key")});
            // I call backend to decide which transcribe service to use.
            // The file key I know it, it's stored in localStorage.get("key")
            axios({
              method: "post",
              url: "http://localhost:8000/getTranscription",  // Change to REAL SERVER ADDRESS.
              data: keyJson,
              headers: { "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"},
            }).then(function (response) {
              console.log("He recibido respuesta de getTranscription");
              console.log("La transcripción es ")
              console.log(response)
            }).catch( function (response) {
              console.log("error when calling getTranscription");
              console.log(response);
            });

          });
    }


    return (
            <Container sx={{ width: '25%' , minWidth: 200}}>
                <Stack spacing={1}>
                    <Box textAlign='center'>
                        <Paper sx={{ height: 400 }}>hola</Paper>
                    </Box>
                    <Box textAlign='center'>
                            <ButtonGroup variant="contained">
                                <Button >Hablar</Button>
                                <Button>Detener</Button>
                            </ButtonGroup>
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
}

export default RecordMenu;