
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { observer } from "mobx-react";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Button } from "@mui/material";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ServicesToAdmin from "../servicesToAdmin/ServicesToAdmin";
import { Link, Outlet } from "react-router-dom";
import Meetings from '../meetings/Meetings';
import './BusinessAdmin.css'


const BusinessAdmin = observer(() => {
    const [value, setValue] =useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return (
        <>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Link to={'./services'} ><Tab label="Services" value='1' /></Link>
                            <Link to={'./meetings'} ><Tab label="Meetings" value='2' /></Link>
                        </TabList>
                    </Box>
                    <TabPanel value='1'>
                        <Outlet />
                    </TabPanel>
                    <TabPanel value='2'>
                        <Outlet />
                    </TabPanel>
                </TabContext>
            </Box>
            <div id='null'></div>
        </>
    );
});

export default BusinessAdmin;
