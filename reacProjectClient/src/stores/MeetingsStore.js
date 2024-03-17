import { DatePicker, DateTimePicker } from '@mui/x-date-pickers';
import { observable, computed, action, makeObservable, runInAction } from 'mobx';
import { Observer, observer } from 'mobx-react';
import Swal from 'sweetalert2'

const meeting = {
    serviceName: '',
    serviceDescription: '',
    servicePrice: '',
    dateTime: '',
    clientName: '',
    clientPhone: '',
    clientEmail: ''
}
class MeetingsStore {

    data = [];

    constructor() {
        makeObservable({
            data: observable,
            addMeeting: action,
            initialMeetingsList: action,

        })
    }

    addMeeting = async (newMeeting) => {
        const response = await fetch("http://localhost:8787/appointment", {
            method: "POST",
            body: JSON.stringify(newMeeting),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            this.data = ([...this.data, newMeeting])
            Swal.fire({
                title: "Your meeting was successfully added!",
                icon: "success"
            });

        }

        else {

            Swal.fire({
                title: "The meeting cannot be scheduled!",
                text: 'The date/time is already taken',
                icon: 'error'
            });
        }

    }
    initialMeetingsList = async () => {
        const response = await fetch("http://localhost:8787/appointments");
        const data = await response.json();
        console.log(data);
        const sortedData = [...data].sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
        this.data = sortedData;
    };






}





export default new MeetingsStore();
