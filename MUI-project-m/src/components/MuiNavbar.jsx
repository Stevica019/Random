import { AppBar,  Toolbar, IconButton, Button, Typography, Stack} from   '@mui/material'
import AnchorIcon from '@mui/icons-material/Anchor';


function MuiHeader(){
    return( 
        <AppBar position='static' color="primary" >
            <Toolbar >
                <IconButton size='large' edge='start'sx={{ color: 'gold' }} aria-label="logo">
                    <AnchorIcon/>
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1}}>
                    Project-M
                </Typography>
                <Stack direction='row' spacing={2}>
                <Button variant='text' color='inherit'>Services</Button>
                <Button variant='text' color='inherit'>Prices</Button>
                <Button variant='text' color='inherit'>About us</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}
export default MuiHeader