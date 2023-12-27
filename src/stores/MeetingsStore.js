import { observable, computed, action, makeObservable, runInAction } from 'mobx';
import { observer } from 'mobx-react';
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

    data = [{serviceName:'demo',servicePrice:'123456'}];

    constructor() {
        makeObservable({
            data: observable,
            getMeetings: computed,
            addMeeting: action,

        })
    }
    get getMeetings() {
        return this.data;
    }
    addMeeting(meeting) {
        //     fetch("http://localhost:8787/appointment", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(meeting),
        //     })
        //         .then((response) => {
        //             if (response.status === 200) {
        //                 this.data.push(meeting);
        //                 console.log("Appointment added successfully!");
        //             } else {
        //                 console.log("Appointment is not available!");
        //             }
        //         })
        //         .catch((error) => {
        //             console.error("Error adding appointment:", error);
        //         });

        this.data = [...this.data, meeting]

        console.log("from store:"+meeting.clientName+" "+meeting.serviceName+" "+meeting.clientEmail +" "+meeting.serviceName)
    }


}


export default new MeetingsStore();
