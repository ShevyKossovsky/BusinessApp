export class MeetingsStore{
    serviceName;
    serviceDescription;
    servicePrice;
    dateTime;
    clientName;
    clientPhone;
    clientEmail;
    constructor(){
    
    }
    constructor(serviceName,serviceDescription,servicePrice,dateTime,clientName,clientPhone,clientEmail){
       this. serviceName=serviceName;
       this.serviceDescription=serviceDescription;
       this.servicePrice=servicePrice;
       this.dateTime=dateTime;
       this.clientName=clientName;
       this.clientPhone=clientPhone;
       this.clientEmail=clientEmail;
    }
}    
export const appointmentsList =[]

addAppointment=(appointment)=>{
    appointmentsList=[...appointmentsList,appointment];
    /*יש צורך לבצע ולידציה מול השרת*/
}

export default new MeetingsStore();
