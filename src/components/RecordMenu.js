import { Button, Grid, Paper } from "@mui/material";
import { Container } from "@mui/system";
import '../style/RecordMenu.css'


const RecordMenu = () => {
    return (
        <Container sx={{ width: 1/2}}>
            <Grid container spacing = {1}>
                <Grid item xs = {12}>
                    <Paper className="audio-interface">Chat bot</Paper>
                </Grid>
                <Grid item xs = {6}>
                        <Button variant="contained" className="button">Hablar</Button>
                </Grid>
                <Grid item xs = {6}>
                        <Button variant="contained" className="button">Detener</Button>
                </Grid>
            </Grid> 
        </Container>
    );
}

export default RecordMenu;