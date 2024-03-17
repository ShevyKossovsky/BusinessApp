// import { useEffect } from "react";
// import MeetingsStore from "../../stores/MeetingsStore";
// import { observer } from "mobx-react";
// import * as React from 'react';
// import './Meetings.css'
// import { styled } from '@mui/material/styles';
// import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
// import MuiAccordion from '@mui/material/Accordion';
// import MuiAccordionSummary from '@mui/material/AccordionSummary';
// import MuiAccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import PersonIcon from '@mui/icons-material/Person';
// import DateRangeIcon from '@mui/icons-material/DateRange';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import EmailIcon from '@mui/icons-material/Email';
// import PaymentIcon from '@mui/icons-material/Payment';
// import SupportAgentIcon from '@mui/icons-material/SupportAgent';



// const Accordion = styled((props) => (
//     <MuiAccordion disableGutters elevation={0} square {...props} />
// ))(({ theme }) => ({
//     border: `1px solid ${theme.palette.divider}`,
//     '&:not(:last-child)': {
//         borderBottom: 0,
//     },
//     '&::before': {
//         display: 'none',
//     },
// }));

// const AccordionSummary = styled((props) => (
//     <MuiAccordionSummary
//         expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
//         {...props}
//     />
// ))(({ theme }) => ({
//     backgroundColor:
//         theme.palette.mode === 'dark'
//             ? 'rgba(255, 255, 255, .05)'
//             : 'rgba(0, 0, 0, .03)',
//     flexDirection: 'row-reverse',
//     '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
//         transform: 'rotate(90deg)',
//     },
//     '& .MuiAccordionSummary-content': {
//         marginLeft: theme.spacing(1),
//     },
// }));

// const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
//     padding: theme.spacing(2),
//     borderTop: '1px solid rgba(0, 0, 0, .125)',
// }));
// const Meetings = (observer(() => {

//     useEffect(() => {
//         MeetingsStore.initialMeetingsList()
//     }, []);

//     const [expanded, setExpanded] = React.useState('panel1');

//     const handleChange = (panel) => (event, newExpanded) => {
//         setExpanded(newExpanded ? panel : false);
//     };
//     //return the color to the className
//     function getColorClass(dateString) {
//         const today = new Date();
//         const date = new Date(dateString);

//         const isToday = date.toDateString() === today.toDateString();
//         const isThisWeek = date >= today && date <= new Date(today.getFullYear(), today.getMonth(), today.getDate() + 6);

//         if (isToday) {
//             return 'red';
//         } else if (isThisWeek) {
//             return 'orange';
//         } else {
//             return 'green';
//         }
//     }

//     return (

//         <>
//             <h1>Meetings:</h1>
//             <div id="meetingsListDiv">
//                 {MeetingsStore.data.length === 0 ? <div>no meetings to show</div>
//                     :

//                     MeetingsStore.data.map((item, index) => (
//                         <Accordion onChange={handleChange('panel1')} key={index} >
//                             <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
//                                 <Typography >Meeting {index + 1}</Typography>
//                             </AccordionSummary>
//                             <AccordionDetails>
//                                 <Typography>
//                                     <p><SupportAgentIcon />{item.serviceName}</p>
//                                     <p><PaymentIcon />{item.servicePrice} &#8362;</p>
//                                     <p className="${getColorClass(item.dateTime)}"><DateRangeIcon /> {item.dateTime}</p>
//                                     <p><PersonIcon /> {item.clientName}</p>
//                                     <p><LocalPhoneIcon />{item.clientPhone}</p>
//                                     <p><EmailIcon />{item.clientEmail}</p>
//                                 </Typography>
//                             </AccordionDetails>
//                         </Accordion>
//                     ))
//                 }

//             </div>











//         </>
//     )
// }))
// export default Meetings

import { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import DateRangeIcon from '@mui/icons-material/DateRange';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PaymentIcon from '@mui/icons-material/Payment';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MeetingsStore from "../../stores/MeetingsStore";
import './Meetings.css'
const CustomAccordion = styled(Accordion)(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const CustomAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const Meetings = observer(() => {
    useEffect(() => {
        MeetingsStore.initialMeetingsList();
    }, []);


    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    function getColorClass(dateString) {
        const today = new Date();
        const date = new Date(dateString);

        const isToday = date.toDateString() === today.toDateString();
        const isThisWeek = date >= today && date <= new Date(today.getFullYear(), today.getMonth(), today.getDate() + 6);

        if (isToday) {
            return 'red';
        } else if (isThisWeek) {
            return 'orange';
        } else {
            return 'green';
        }
    }

    return (
        <>
            <h1>Meetings:</h1>

            <div class="color-bar">
                <div class="color redd"> for today</div>
                <div class="color orangee">for the week</div>
                <div class="color greenn">for later</div>
            </div>
            <div id="meetingsListDiv">
                {MeetingsStore.data.length === 0 ? (
                    <div>no meetings to show</div>
                ) : (

                    MeetingsStore.data.map((item, index) => (
                        <CustomAccordion
                            onChange={handleChange('panel1')}
                            key={index}
                        >
                            <CustomAccordionSummary
                                aria-controls="panel1d-content"
                                id="panel1d-header"
                                expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
                            >
                                <Typography><p >Meeting {index + 1}: {item.dateTime}</p></Typography>
                            </CustomAccordionSummary>
                            <CustomAccordionDetails className={getColorClass(item.dateTime)}>
                                <Typography >
                                    <p><SupportAgentIcon />{item.name}</p>
                                    <p><PaymentIcon />{item.price} &#8362;</p>
                                    <p><DateRangeIcon /> {item.dateTime}</p>
                                    <p><PersonIcon /> {item.clientName}</p>
                                    <p><LocalPhoneIcon />{item.clientPhone}</p>
                                    <p><EmailIcon />{item.clientEmail}</p>
                                </Typography>
                            </CustomAccordionDetails>
                        </CustomAccordion>
                    ))
                )}
            </div>
        </>
    );
});

export default Meetings;
