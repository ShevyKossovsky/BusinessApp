
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import './EditDetails.css'
import BusinessStore from '../../stores/BusinessStore';
import Swal from 'sweetalert2';
import { observer } from 'mobx-react';
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

const EditDetails = (observer(() => {
    const [localBusinessDetails, setLocalBusinessDetails] = useState(BusinessStore.businessDetails);
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: localBusinessDetails.name,
        address: localBusinessDetails.address,
        email: localBusinessDetails.email,
        phone: localBusinessDetails.phone,
        owner: localBusinessDetails.owner,
        description: localBusinessDetails.description,
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleInputChange = (event, field) => {
        setFormData((prevState) => ({
            ...prevState,
            [field]: event.target.value,
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        handleClose();




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
                    text: 'Your changes was successfully set!',
                    icon: 'success',
                });
                console.log(formData.dateTime)
                BusinessStore.changeBusinessDetails(formData);


            }
        });


    };

    return (
        <>
            <Fab color="primary" aria-label="edit" onClick={handleClickOpen}>
                <EditIcon />
            </Fab>
            <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Business Details
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
                <form className="formDiv" id="formForEdit" onSubmit={handleSubmit}>
                    <TextField
                        id="outlined-basic"
                        label="Business Name"
                        variant="outlined"
                        defaultValue={formData.name}
                        className="inputs"
                        onChange={(event) => handleInputChange(event, 'name')}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Business Description"
                        variant="outlined"
                        defaultValue={formData.description}
                        className="inputs"
                        onChange={(event) => handleInputChange(event, 'description')}
                    />

                    <TextField
                        id="outlined-basic"
                        label="business address"
                        variant="outlined"
                        defaultValue={formData.address}
                        className="inputs"
                        onChange={(event) => handleInputChange(event, 'address')}


                    />  <TextField
                        id="outlined-basic"
                        label="business email"
                        variant="outlined"
                        defaultValue={formData.email}
                        className="inputs"
                        type='email'
                        onChange={(event) => handleInputChange(event, 'email')}


                    />
                    <TextField
                        id="outlined-basic"
                        label="business phone"
                        variant="outlined"
                        defaultValue={formData.phone}
                        className="inputs"
                        onChange={(event) => handleInputChange(event, 'phone')}


                    />
                    <TextField
                        id="outlined-basic"
                        label="business owner"
                        variant="outlined"
                        defaultValue={formData.owner}
                        className="inputs"
                        onChange={(event) => handleInputChange(event, 'owner')}


                    />

                    <Button component="label" variant="contained" endIcon={<FileUploadIcon />}>
                        Upload Logo
                        <VisuallyHiddenInput type="file" />
                    </Button>
                    <Button autoFocus type="submit">
                        Save Changes
                    </Button>
                </form>
            </BootstrapDialog>
        </>
    );
}))
export default EditDetails
