import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const ShowWorks = () =>{
return(
<div className='xs:w-[300px] sm:w-[500px]'>
    <Card sx={{ maxWidth: 550 }}>
        <CardMedia
            title="IMS"
        >
            <img src="https://github.com/tuungss123/Portfolio/blob/master/IMS.png?raw=true"/>
        </CardMedia>
        <CardContent>
            <Typography gutterBottom variant="h6" component="div">
            Inventory Management System
            </Typography>
            <Typography variant="body2" color="text.secondary">
            An Inventory Management System developed using Reactjs and Django frameworks.
            </Typography>
        </CardContent>
        <CardActions>
            <Button href='https://ims-8as7.onrender.com/' target="_blank" rel="noopener noreferrer" size="small">Open</Button>
            <Button href='https://github.com/Quichoo/IMS' target="_blank" rel="noopener noreferrer" size="small">Code</Button>
        </CardActions>
    </Card>
</div>)

}

export default ShowWorks