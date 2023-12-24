import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import Button from '@mui/material/Button';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import { servicesList } from '../../stores/ServicesStore';
import './ServicesTabs.css'
function ServicesTabs() {

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            {servicesList.map((item, index) => (
                                <Tab label={item.name} value={index} key={index} className='tabs'/>
                            ))}

                        </TabList>

                    </Box>
                    <>
                        {servicesList.map((item, index) => (
                            <TabPanel value={index} className='tabPanel'  key={index} >

                                <div className='tabInfo'>

                                <div className='description'>
                                <Button variant="outlined"  >Let's talk about it...<InsertInvitationIcon/> </Button>

                                <p className='titleTab'>{item.name}</p>
                                <p className='descTab'>{item.description}</p>

                                </div>
                                <img src={item.imgService} className='imgService' />
                                </div>
                            </TabPanel>

                        ))}
                    </>

                </TabContext>
            </Box>
        </>



    )











}
export default ServicesTabs