import { Box, Card, CardContent, Typography, CardActions, Button, Grid} from '@mui/material'

function Cards(){
    return(
        <>
        <Grid container justifyContent='center' p={2} mt={2}>
        <Typography variant='h4'>Services</Typography>
    <Box sx={{ width: '100vw'}} marginTop={3} display='flex' flexDirection='row' gap={3}>
        <Card>
            <CardContent>
                <Typography gutterBottom variant='h5' component='div' align='center'>
                    Reshi
                </Typography>
                <Typography varitant='body2'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Animi cumque consequuntur perferendis 
                    voluptatum nisi placeat aspernatur quam? 
                    Deleniti molestiae voluptatem at rem quaerat
                     qui eos aliquid magni quisquam doloremque? Quaerat.
                </Typography>
            </CardContent>
            <CardActions >
                <Button variant='contained' color='secondary'>Checkout</Button>
            </CardActions>
        </Card>
        <Card>
            <CardContent >
                <Typography gutterBottom variant='h5' component='div' align='center'>
                    Reshi
                </Typography>
                <Typography varitant='body2'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Animi cumque consequuntur perferendis 
                    voluptatum nisi placeat aspernatur quam? 
                    Deleniti molestiae voluptatem at rem quaerat
                     qui eos aliquid magni quisquam doloremque? Quaerat.
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained' color='secondary'>Checkout</Button>
            </CardActions>
        </Card>
        <Card>
            <CardContent >
                <Typography gutterBottom variant='h5' component='div' align='center'>
                    Reshi
                </Typography>
                <Typography varitant='body2'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Animi cumque consequuntur perferendis 
                    voluptatum nisi placeat aspernatur quam? 
                    Deleniti molestiae voluptatem at rem quaerat
                     qui eos aliquid magni quisquam doloremque? Quaerat.
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained' color='secondary'>Checkout</Button>
            </CardActions>
        </Card>
    </Box>
    </Grid>
    </>)
}
export default Cards