import { Grid, Box, 
        Typography, Paper, 
        Button, List, 
        ListItem, ListItemIcon } from '@mui/material'

import CheckIcon from '@mui/icons-material/Check';
export default function BetterCards(){

    return(
        <Grid   container gap={1}
                sx={ {backgroundColor:'black'}} 
                justifyContent='space-evenly'
                marginTop={3}
                p={2}
                >
            <Grid xs="3.6">
            <Paper>
            <Grid container justifyContent='center' direction='column'>
            <Typography variant='h4' 
                            align='center' 
                            fontWeight={'bold'} 
                            color={'secondary'}
                            gutterBottom
                            mt={2}>
                                Cock
                </Typography>
                <Typography variant='h3' align='center'>100$</Typography>
                <List>
                    <ListItem><ListItemIcon sx={{ minWidth: "25px"}}><CheckIcon fontSize='small'/></ListItemIcon>U sto jaki list itemi ebemu</ListItem>
                    <ListItem><ListItemIcon sx={{ minWidth: "25px"}}><CheckIcon fontSize='small'/></ListItemIcon>Kita</ListItem>
                    <ListItem><ListItemIcon sx={{ minWidth: "25px"}}><CheckIcon fontSize='small'/></ListItemIcon>Kita</ListItem>
                    <ListItem><ListItemIcon sx={{ minWidth: "25px"}}><CheckIcon fontSize='small'/></ListItemIcon>Kita</ListItem>
                    <ListItem><ListItemIcon sx={{ minWidth: "25px"}}><CheckIcon fontSize='small'/></ListItemIcon>Kita</ListItem>
                </List>
                <Box alignSelf='center'>
                <Button variant='contained' 
                        color='secondary' 
                        size='large' 
                        sx={{marginBottom: '1rem'}}>
                            Checkout
                </Button>
                </Box>
                </Grid>
            </Paper>
            </Grid>            <Grid xs="3.6">
            <Paper>
            <Grid container justifyContent='center' direction='column'>
            <Typography variant='h4' 
                            align='center' 
                            fontWeight={'bold'} 
                            color={'secondary'}
                            gutterBottom
                            mt={2}>
                                Cock
                </Typography>
                <Typography variant='h3' align='center'>100$</Typography>
                <List>
                    <ListItem><ListItemIcon sx={{ minWidth: "25px"}}><CheckIcon fontSize='small'/></ListItemIcon>U sto jaki list itemi ebemu</ListItem>
                    <ListItem><ListItemIcon sx={{ minWidth: "25px"}}><CheckIcon fontSize='small'/></ListItemIcon>Kita</ListItem>
                    <ListItem><ListItemIcon sx={{ minWidth: "25px"}}><CheckIcon fontSize='small'/></ListItemIcon>Kita</ListItem>
                    <ListItem><ListItemIcon sx={{ minWidth: "25px"}}><CheckIcon fontSize='small'/></ListItemIcon>Kita</ListItem>
                    <ListItem><ListItemIcon sx={{ minWidth: "25px"}}><CheckIcon fontSize='small'/></ListItemIcon>Kita</ListItem>
                </List>
                <Box alignSelf='center'>
                <Button variant='contained' 
                        color='secondary' 
                        size='large' 
                        sx={{marginBottom: '1rem'}}>
                            Checkout
                </Button>
                </Box>
                </Grid>
            </Paper>
            </Grid>            <Grid xs="3.6">
            <Paper>
            <Grid container justifyContent='center' direction='column'>
            <Typography variant='h4' 
                            align='center' 
                            fontWeight={'bold'} 
                            color={'secondary'}
                            gutterBottom
                            mt={2}>
                                Cock
                </Typography>
                <Typography variant='h3' align='center'>100$</Typography>
                <List>
                    <ListItem><ListItemIcon sx={{ minWidth: "25px"}}><CheckIcon fontSize='small'/></ListItemIcon>U sto jaki list itemi ebemu</ListItem>
                    <ListItem><ListItemIcon sx={{ minWidth: "25px"}}><CheckIcon fontSize='small'/></ListItemIcon>Kita</ListItem>
                    <ListItem><ListItemIcon sx={{ minWidth: "25px"}}><CheckIcon fontSize='small'/></ListItemIcon>Kita</ListItem>
                    <ListItem><ListItemIcon sx={{ minWidth: "25px"}}><CheckIcon fontSize='small'/></ListItemIcon>Kita</ListItem>
                    <ListItem><ListItemIcon sx={{ minWidth: "25px"}}><CheckIcon fontSize='small'/></ListItemIcon>Kita</ListItem>
                </List>
                <Box alignSelf='center'>
                <Button variant='contained' 
                        color='secondary' 
                        size='large' 
                        sx={{marginBottom: '1rem'}}>
                            Checkout
                </Button>
                </Box>
                </Grid>
            </Paper>
            </Grid>
        </Grid>
    )
}