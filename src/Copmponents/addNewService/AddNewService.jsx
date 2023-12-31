import { observer } from "mobx-react";
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import './AddNewService.css'
import CloseIcon from '@mui/icons-material/Close';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BusinessStore from '../../stores/BusinessStore';
import Swal from 'sweetalert2';
import ServicesStore from "../../stores/ServicesStore";
import imgForService from '../../assets/images/realtor-with-money-wooden-house.jpg'
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
const AddNewService = (observer(() => {

    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        imgService: imgForService

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
                    text: 'Your service was successfully added!',
                    icon: 'success',
                });

                ServicesStore.addService(formData)
            }
        });


    };
    return (

        <>
            <Fab color="primary" aria-label="edit" onClick={handleClickOpen}>
                <AddIcon />
            </Fab>
            <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    New Service
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
                <form className="formDiv" id="formForAdd" onSubmit={handleSubmit}>
                    <TextField
                        id="outlined-basic"
                        label="Service name"
                        variant="outlined"
                        defaultValue={formData.name}
                        className="inputs"
                        onChange={(event) => handleInputChange(event, 'name')}
                    />
                    <TextField
                        id="outlined-basic"
                        label="service description"
                        variant="outlined"
                        defaultValue={formData.description}
                        className="inputs"
                        onChange={(event) => handleInputChange(event, 'description')}
                    />

                    <TextField
                        id="outlined-basic"
                        label="serivce price"
                        variant="outlined"
                        defaultValue={formData.price}
                        className="inputs"
                        onChange={(event) => handleInputChange(event, 'price')}


                    />
                    <Button autoFocus type="submit">
                        Add service
                    </Button>
                </form>
            </BootstrapDialog>





        </>
    )

}))

export default AddNewService