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
import { useState } from 'react';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Swal from 'sweetalert2'
import './AddNewMeeting.css'
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
});
swalWithBootstrapButtons.fire({
    title: "Are you sure you want to make the meeting?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, save it!",
    cancelButtonText: "No, cancel!",
    reverseButtons: true
}).then((result) => {
    if (result.isConfirmed) {
        console.log("save the details")
        swalWithBootstrapButtons.fire({
            title: "The appointment was successfully set!",
            icon: "success"
        });
    } else if (
        result.dismiss === Swal.DismissReason.cancel
    ) {
        swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "The meeting has not been scheduled :(",
            icon: "error"
        });
    }
});

export default function AddNewMeeting() {


    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
    const handleSubmit = () => {
        console.log("Iam trinig to save the meeting")
        //החלונית של הדיאלוג
        swalWithBootstrapButtons();

    }
    return (
        <Fragment>
            <Button onClick={handleClickOpen} variant="outlined"  >
                Let's talk about it...
                <InsertInvitationIcon />
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
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

                <form className="formDiv" id='formForMeeting' onSubmit={handleSubmit}>
                    <TextField
                        id="outlined-basic"
                        label="name:"
                        variant="outlined"
                        className="inputs"
                    />
                    <TextField
                        id="outlined-basic"
                        label="phone:"
                        variant="outlined"
                        className="inputs"
                    />
                    <TextField
                        id="outlined-basic"
                        label="email:"
                        variant="outlined"
                        className="inputs"
                        type='email'
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DemoContainer components={['DateTimePicker']}>
                            <DateTimePicker className='dateInput' label="date&time" />
                        </DemoContainer>
                    </LocalizationProvider>
                
                    <Button autoFocus onClick={handleClose}>
                        save the day
                    </Button>
                    </form>
                </DialogActions>
            </BootstrapDialog>
        </Fragment>


    );
}