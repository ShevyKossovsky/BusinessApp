import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useEffect, useState } from 'react';
import './ServicesTabs.css'
import GlobalStore from '../../stores/GlobalStore';
import AddNewMeeting from '../addNewMeeting/AddNewMeeting';
import ServicesStore from '../../stores/ServicesStore';
import MeetingsStore from '../../stores/MeetingsStore';
import { observer } from 'mobx-react';


const ServicesTabs=(observer(()=> {

    useEffect(() => {
        ServicesStore.initialServicesList();
      },[])
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
                            {ServicesStore.servicesList.map((item, index) => (
                                <Tab label={item.name} value={index} key={index} className='tabs' />
                            ))}
                        </TabList>
                    </Box>
                    <>
                        {ServicesStore.servicesList.map((item, index) => (
                            <TabPanel value={index} className='tabPanel' key={index} >

                                <div className='tabInfo'>

                                    <div className='description'>
                                        {!GlobalStore.isLogin && <AddNewMeeting service={item}></AddNewMeeting>}

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
}))
export default ServicesTabs