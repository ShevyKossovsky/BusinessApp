
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import { observer } from "mobx-react";
// import { Button } from "@mui/material";
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import ServicesToAdmin from "../servicesToAdmin/ServicesToAdmin";
// import { Link, Outlet } from "react-router-dom";

// function TabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`vertical-tabpanel-${index}`}
//             aria-labelledby={`vertical-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box sx={{ p: 3 }}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }

// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//     return {
//         id: `vertical-tab-${index}`,
//         'aria-controls': `vertical-tabpanel-${index}`,
//     };
// }

// const BusinessAdmin = (observer(() => {
//     const [value, setValue] = React.useState(0);

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };

//     return (


//         <>

//             <Box
//                 sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 300 }}
//             >
//                 <Tabs
//                     orientation="vertical"
//                     value={value}
//                     onChange={handleChange}
//                     aria-label="Vertical tabs example"
//                     sx={{ borderRight: 1, borderColor: 'divider' }}
//                 >
//                     <Link to='./services'>  <Tab label="Services" /></Link>
//                     <Link to='./meetings'>  <Tab label="Meetings" /></Link>


//                 </Tabs>

//                 <TabPanel value={value} index={0} >
//                     <Outlet />
//                 </TabPanel>
//                 <TabPanel value={value} index={1}>
//                     <Outlet />
//                 </TabPanel>

//             </Box>

//         </>
//     )

// }))
// export default BusinessAdmin

import * as React from 'react';
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



const BusinessAdmin = observer(() => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Link to={'./services'} ><Tab label="Services" value="1" /></Link>
                            <Link to={'./meetings'} ><Tab label="Meetings" value="2" /></Link> 
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <Outlet />
                        
                        </TabPanel>
                    <TabPanel value="2">
                        <Outlet />
                    
                        </TabPanel>
                </TabContext>
            </Box>
        </>
    );
});

export default BusinessAdmin;
