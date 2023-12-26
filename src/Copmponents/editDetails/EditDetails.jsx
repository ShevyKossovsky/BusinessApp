import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './EditDetails.css'
import BusinessStore from '../../stores/BusinessStore';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import * as React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function EditDetails() {

    const [localBussinessDetails, setBussinessDetails] = useState(BusinessStore.businessDetails);

    const handleSubmit = (e) => {

        BusinessStore.saveChanges(localBussinessDetails)
        console.log("save")
    }
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });


    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
            padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
            padding: theme.spacing(1),
        },
    }));

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (

        <>



            <React.Fragment>
                <Fab color="primary" aria-label="edit" onClick={handleClickOpen}>
                    <EditIcon />
                </Fab>
                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >
                    <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                        business's details
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

                    <form className="formDiv" id='formForEdit' onSubmit={handleSubmit}>
                        <TextField
                            id="outlined-basic"
                            label="business name"
                            variant="outlined"
                            defaultValue={localBussinessDetails.name}
                            className="inputs"
                        />
                        <TextField
                            id="outlined-basic"
                            label="business description"
                            variant="outlined"
                            defaultValue={localBussinessDetails.description}
                            className="inputs"
                        />

                        <TextField
                            id="outlined-basic"
                            label="business address"
                            variant="outlined"
                            defaultValue={localBussinessDetails.address}
                            className="inputs"
                        />  <TextField
                            id="outlined-basic"
                            label="business email"
                            variant="outlined"
                            defaultValue={localBussinessDetails.email}
                            className="inputs"
                            type='email'
                        />
                        <TextField
                            id="outlined-basic"
                            label="business phone"
                            variant="outlined"
                            defaultValue={localBussinessDetails.phone}
                            className="inputs"
                        />
                        <TextField
                            id="outlined-basic"
                            label="business owner"
                            variant="outlined"
                            defaultValue={localBussinessDetails.owner}
                            className="inputs"
                        />

                        <Button component="label" variant="contained" endIcon={<FileUploadIcon></FileUploadIcon>}>
                            upload logo
                            <VisuallyHiddenInput type="file" />

                        </Button>

                    </form>


                    <Button autoFocus onClick={handleClose}>
                        Save changes
                    </Button>

                </BootstrapDialog>
            </React.Fragment>












        </>









    )




}