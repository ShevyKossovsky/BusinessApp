import { useEffect } from "react";
import MeetingsStore from "../../stores/MeetingsStore";
import { observer } from "mobx-react";
import * as React from 'react';
import './Meetings.css'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import DateRangeIcon from '@mui/icons-material/DateRange';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PaymentIcon from '@mui/icons-material/Payment';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';



const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
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

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
const Meetings = (observer(() => {


    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };


    return (
        <>
            <h1>Meetings:</h1>
            <div id="meetingsListDiv">
                {
                    MeetingsStore.meetingsList.map((item, index) => (
                        <Accordion  onChange={handleChange('panel1')} key={index} >
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography >Meeting {index+1}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <p><SupportAgentIcon/>{ item.serviceName}</p>
                                    <p><PaymentIcon/>{ item.servicePrice} &#8362;</p>
                                    <p><DateRangeIcon/> { item.dateTime}</p>
                                    <p><PersonIcon/> { item.clientName}</p>
                                    <p><LocalPhoneIcon/>{ item.clientPhone}</p>
                                    <p><EmailIcon/>{ item.clientEmail}</p>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))
                }

            </div>











        </>
    )
}))
export default Meetings