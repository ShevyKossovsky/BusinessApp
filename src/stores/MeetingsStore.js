import { DatePicker, DateTimePicker } from '@mui/x-date-pickers';
import { observable, computed, action, makeObservable, runInAction } from 'mobx';
import { Observer } from 'mobx-react';
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

    data = observable([
        {
            serviceName: 'Mortage',
            serviceDescription: 'blablabla',
            servicePrice: '500',
            dateTime: '02/4/2024',
            clientName: 'Shevy',
            clientPhone: '0556773361',
            clientEmail: 's055677336@gmail.com'
        },
        {
            serviceName: 'Mortage',
            serviceDescription: 'blablabla',
            servicePrice: '200',
            dateTime: '02/1/2024',
            clientName: 'Ruthy klein',
            clientPhone: '0556773361',
            clientEmail: 's055677336@gmail.com'
        },
    ]);

    constructor() {
        makeObservable({
            data: observable,
            getMeetings: computed,
            addMeeting: action,
            initialMeettingList: action

        })
    }

    initialMeettingList = async () => {
        const response = await fetch("http://localhost:8787/appointments");
        const data = await response.json();
        const sortedData = [...data].sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
        this.meettingList = sortedData;

    }

    addMeeting = async (meeting) => {
        try {
            const response = await fetch("http://localhost:8787/appointment", {
                method: "POST",
                body: JSON.stringify(meeting),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response.status === 200) {
                this.data = ([...this.data, meeting])
                Swal.fire({
                    title: "An meeting has been made",
                    text: "Your details have been successfully entered!",
                    icon: "success"
                });
            }
            else {
                console.log("error, the meethinf...")
                Swal.fire({
                    title: 'Error',
                    text: 'The date or time is already taken...',
                    icon: "error"
                });
            }
        } catch (error) {
            console.log("error, the meethinf...")
            Swal.fire({
                title: 'Error',
                text: 'The date or time is already taken...',
                icon: "error"
            });

        }
    }
    get meetingsList() {
        return this.data;
    }

}





export default new MeetingsStore();
