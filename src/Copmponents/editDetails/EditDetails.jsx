import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './EditDetails.css'
import BusinessStore from '../../stores/BusinessStore';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
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

    return (

        <>

            <form className="formDiv" onSubmit={handleSubmit}>
                <div className="editDetailsDiv">
                    <h1>edit details</h1>
                </div>
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
                <Button variant="contained" type='submit' >
                    submit
                </Button>
            </form>
        </>









    )




}