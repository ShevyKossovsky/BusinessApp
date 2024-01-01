import { observer } from "mobx-react";
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ServicesStore from "../../stores/ServicesStore";
import AddNewService from "../addNewService/AddNewService";
import './ServicesToAdmin.css'
const ServicesToAdmin = (observer(() => {

    React.useEffect(() => {
        ServicesStore.initialServicesList();
    }, [])

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (



        <>


            <AddNewService />

            <div>


                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-evenly' }}>
                    {ServicesStore.servicesList.map((item, index) => (
                        <Card sx={{ maxWidth: 345 }} index={index} key={index}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={item.imgService}
                                    alt={item.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                            </CardActions>
                        </Card>
                    ))}

                </div>
            </div>

        </>
    );



}))
export default ServicesToAdmin