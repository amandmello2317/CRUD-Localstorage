import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import empty from './empty.jpg'
import { styled } from '@mui/material/styles';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

// Code for Expand
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


function ViewCard({ singleData }) {
    
    const [data, setData] = useState([])

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        setData(singleData)
    }, [singleData])
    console.log(data);
  


    return (
        <>
            {data.map((item) => (

                <Box sx={style} key={item.u_id}>

                    <Card sx={{ maxWidth: 345 }} >

                        <CardHeader
                            avatar={
                    
                                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                                    {item.fname.charAt(0)}
                                </Avatar>
                            }
                            action={

                                <IconButton aria-label="settings">

                                </IconButton>
                            }

                            title={`${item.fname} ${item.lname}`}

                            subheader={item.email}
                        />

                        <CardMedia
                            component="img"
                            height="194"
                            image={empty}
                            alt="Paella dish"
                        />

                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Name : {item.fname}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Last Name : {item.lname}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Email : {item.email}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Age : {item.age}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Phone : {item.phone}
                            </Typography>
                        </CardContent>

                        <CardActions disableSpacing>
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" /></svg>
                                {/* <ExpandMoreIcon /> */}
                            </ExpandMore>

                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>

                                <Typography paragraph>Deatils:</Typography>
                                <Typography paragraph>
                                 Name: {item.fname}
                                </Typography>
                                <Typography paragraph>
                                 Email: {item.email}
                                </Typography>
                                <Typography>
                                    Age: {item.age}
                                </Typography>
                                <Typography>
                                    Phone: {item.phone}
                                </Typography>

                            </CardContent>
                        </Collapse>
                    </Card>
                </Box>
            ))}
        </>
    )
}

export default ViewCard

