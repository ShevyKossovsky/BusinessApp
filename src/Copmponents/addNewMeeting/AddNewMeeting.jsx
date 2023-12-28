

import React, { useState } from 'react';
import { TextField, Button, DialogActions, DialogTitle, Dialog } from '@mui/material';
// import { formatISO, parseISO } from 'date-fns';
import './AddNewMeeting.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import InsertInvitationRoundedIcon from '@mui/icons-material/InsertInvitationRounded';
import MeetingsStore from '../../stores/MeetingsStore';
import { observer } from 'mobx-react';
const AddNewMeeting = (observer(({ service }) => {

    const [formData, setFormData] = useState({
        clientName: '',
        clientPhone: '',
        clientEmail: '',
        dateTime: null,
    }, []);
    const handleInputChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };
    const handleDateTimeChange = (dateTime) => {
        const formattedDateTime = dateTime.format('YYYY-MM-DDTHH:mm:ss');
        setFormData((prevData) => ({
            ...prevData,
            dateTime: formattedDateTime,
        }));
        handleInputChange({ target: { name: 'dateTime', value: formattedDateTime } });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData.clientEmail);
        console.log(formData.clientName);
        console.log(formData.clientPhone);
        console.log(formData.dateTime);
        console.log(service.name);
        console.log(service.id);
        MeetingsStore.addMeeting(formData);
        setFormData((prevData) => ({
            ...prevData,
            clientName: '',
            clientPhone: '',
            clientEmail: '',
            dateTime: null,
        }));
        handleClose();
    };
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button
                onClick={handleClickOpen}
                variant="contained"
                color="primary"
                startIcon={<InsertInvitationRoundedIcon />}>
                Book a meeting
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="xs"
                fullWidth
                aria-labelledby="form-dialog-title"
                PaperProps={{ sx: { p: 4 } }}
            >
                <DialogTitle>Book a Meeting</DialogTitle>

                <form onSubmit={handleSubmit} className="form">
                    {/* Service details */}
                    <TextField
                        id="outlined-disabled"
                        label="name"
                        defaultValue={service.name}
                        variant="outlined"
                        className="inputs"
                        fullWidth
                        sx={{ mb: 3, mt: 3 }}
                        disabled
                    />
                    <TextField
                        id="outlined-disabled"
                        label="description"
                        defaultValue={service.description}
                        variant="outlined"
                        className="inputs"
                        sx={{ mb: 3 }}
                        fullWidth
                        disabled
                    />
                    <TextField
                        id="outlined-disabled"
                        label="price"
                        defaultValue={service.price}
                        variant="outlined"
                        className="inputs"
                        sx={{ mb: 3 }}
                        fullWidth
                        disabled

                    />
                    {/* Client details */}
                    <TextField
                        id="clientName_input"
                        label="Client Name"
                        variant="outlined"
                        className="inputs"
                        name="clientName"
                        value={formData.clientName}
                        onChange={handleInputChange}
                        sx={{ mb: 3 }}
                        fullWidth
                        required
                    />
                    <TextField
                        id="clientPhone_input"
                        label="Client Phone"
                        variant="outlined"
                        className="inputs"
                        name="clientPhone"
                        value={formData.clientPhone}
                        onChange={handleInputChange}
                        sx={{ mb: 3 }}
                        fullWidth
                        required
                    />
                    <TextField
                        id="clientEmail_input"
                        label="Client Email"
                        type='email'
                        variant="outlined"
                        className="inputs"
                        name="clientEmail"
                        value={formData.clientEmail}
                        onChange={handleInputChange}
                        sx={{ mb: 3 }}
                        fullWidth
                        required
                    />
                    {/* Meeting date and time */}
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            renderInput={(props) => (
                                <TextField
                                    {...props}
                                    variant="outlined"
                                    className="inputs"
                                    name="dateTime"
                                    sx={{ mb: 3, mx: 4 }}
                                    label="Meeting Date and Time"

                                />
                            )}
                            value={formData.dateTime}
                            onChange={handleDateTimeChange}
                            disablePast
                            required
                            fullWidth
                        />

                    </LocalizationProvider>

                    {/* Submit button */}
                    <DialogActions>
                        <Button type="submit" variant="contained" color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}));

export default AddNewMeeting;
