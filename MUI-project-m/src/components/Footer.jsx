import  { Grid, Toolbar, Button, Stack, Typography, Divider, IconButton, Input } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import InstagramIcon from '@mui/icons-material/Instagram';



export default function Footer(){

    return(
    <Grid container direction='row' p={3} mt={4} bgcolor="black" justifyContent="space-evenly">
        
        <Grid container justifyContent='space-evenly' xs={7}>
            <Stack direction='column' spacing={1.5} divider={<Divider orientation="horizontal" flexItem />}>
                <Button sx={{ color: 'purple'}}>Home</Button>
                <Button sx={{ color: 'purple'}}>Services</Button>
                <Button sx={{ color: 'purple'}}>Features</Button>
                <Button sx={{ color: 'purple'}}>Contact us</Button>
            </Stack>
            <Stack direction='column' spacing={1.5} divider={<Divider orientation="horizontal" flexItem />}>
                <Button sx={{ color: 'purple'}}>Company</Button>
                <Button sx={{ color: 'purple'}}>Join us</Button>
                <Button sx={{ color: 'purple'}}>About us</Button>
                <Button sx={{ color: 'purple'}}>Marketplace</Button>
            </Stack>
        </Grid>
        <Grid container direction='column' xs={5} justifyContent='space-evenly'>
            <Grid container direction='column' alignItems='flex-start'>
            <Typography color='White'>Enter your email here:</Typography>
            <Input placeholder="Hello world" color="secondary" sx={{ backgroundColor: 'white'}} fullWidth/>
            <Button sx={{ color: 'purple'}}>Submit</Button>
                
            </Grid>
            <Stack direction='row' spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
                <IconButton sx={{ color: 'purple'}}><FacebookIcon/></IconButton>
                <IconButton sx={{ color: 'purple'}}><XIcon/></IconButton>
                <IconButton sx={{ color: 'purple'}}><NewspaperIcon/></IconButton>
                <IconButton sx={{ color: 'purple'}}><InstagramIcon/></IconButton>
            </Stack>
        </Grid>
            
        

    </Grid>
    )
}