import * as React from 'react';
import { Fragment } from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Swal from 'sweetalert2'
import './AddNewMeeting.css'
import { observer } from 'mobx-react';
import MeetingsStore from '../../stores/MeetingsStore';
import { dayjs } from 'dayjs';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const AddNewMeeting = (observer(({ selectedService }) => {

    const [service, setSelectedService] = useState(selectedService);
    const [formData, setFormData] = useState({
        name: service?.name,
        description: service?.description,
        price: service?.price,
        clientName: '',0
        clientPhone: '',
        clientEmail: '',
        dateTime: '',

    });
    useEffect(() => {
        setFormData({
            name: service.name,
            description: service.description,
            price: service.price,
            clientName: '',
            clientPhone: '',
            clientEmail: '',
            dateTime: '',
        });
    }, [service]);





    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, save it!',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Great!',
                    text: 'Your meeting was successfully set!',
                    icon: 'success',
                });
                MeetingsStore.addMeeting(formData);

            }
        });
    };

    return (
        <Fragment>
            <Button onClick={handleClickOpen} variant="outlined">
                Let's talk about it...
                <InsertInvitationIcon />
            </Button>
            <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Tell us your details:
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogActions>
                    <div>meetings</div>
                    {
                        MeetingsStore.data.map((item, index) => (
                            <div key={index} >
                                <p>{item.name}</p>
                                <p >{item.servicePrice}</p>
                                <p >{item.description}</p>
                                <p >{item.clientName}</p>
                                <p >{item.clientPhone}</p>

                            </div >

                        ))
                    }

                    <form className="formDiv" id="formForMeeting">
                        <TextField
                            id="outlined-basic"
                            label="serviceName:"
                            variant="outlined"
                            className="inputs"
                            value={formData.name}
                            disabled

                        />      <TextField
                            id="outlined-basic"
                            label="description:"
                            variant="outlined"
                            className="inputs"

                            value={formData.description}
                            disabled
                        />
                        <TextField
                            id="outlined-basic"
                            label="price:"
                            variant="outlined"
                            className="inputs"

                            value={formData.price}
                            disabled
                        />
                        <TextField
                            id="outlined-basic"
                            label="name:"
                            variant="outlined"
                            className="inputs"
                            value={formData.clientName}
                            onChange={(event) => {
                                setFormData((prevState) => ({
                                    ...prevState,
                                    clientName: event.target.value,
                                }));
                            }}
                        />
                        <TextField
                            id="outlined-basic"
                            label="phone:"
                            variant="outlined"
                            className="inputs"
                            value={formData.clientPhone}
                            onChange={(event) => {
                                setFormData((prevState) => ({
                                    ...prevState,
                                    clientPhone: event.target.value,
                                }));
                            }}
                        />
                        <TextField
                            id="outlined-basic"
                            label="email:"
                            variant="outlined"
                            className="inputs"
                            type="email"

                            value={formData.clientEmail}
                            onChange={(event) => {
                                setFormData((prevState) => ({
                                    ...prevState,
                                    clientEmail: event.target.value,
                                }));
                            }}
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DateTimePicker']}>
                                <DateTimePicker
                                    className="dateInput"
                                    label="date&time"

                                    onChange={(event) => {
                                        setFormData((prevState) => ({
                                            ...prevState,
                                            dateTime: dayjs(event.target.value).format('YYYY-MM-DD HH:mm:ss'),
                                        }));
                                    }}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                        <Button autoFocus onClick={() => { handleClose(); handleSubmit(); }}>
                            save the day
                        </Button>
                    </form>

                </DialogActions>
            </BootstrapDialog>
        </Fragment>

    );

}))
export default AddNewMeeting