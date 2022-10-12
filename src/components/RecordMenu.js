import { Button, ButtonGroup , Paper} from '@mui/material'
import { Box, Container, Stack } from '@mui/system';
import '../style/RecordMenu.css'


const RecordMenu = () => {
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
            </Container>
    );
}

export default RecordMenu;