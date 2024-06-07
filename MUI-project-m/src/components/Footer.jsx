import  { Grid, Toolbar, Button, Stack, Typography, Divider} from '@mui/material'



export default function Footer(){

    return(
    <Grid container direction='row' p={2} bgcolor="primary.light">
        
        <Toolbar>
            <Stack direction='column' spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
                <Button>Home</Button>
                <Button>Services</Button>
                <Button>Prices</Button>
                <Button>About us</Button>
            </Stack>
            <Stack direction='column' spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
                <Button>Home</Button>
                <Button>Services</Button>
                <Button>Prices</Button>
                <Button>About us</Button>
            </Stack>
        </Toolbar>

    </Grid>
    )
}