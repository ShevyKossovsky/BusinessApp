import { observable, action, computed, makeObservable } from 'mobx';

export class BusinessStore {
  // data = {
  //   name: "save-mortgage and finance consulting",
  //   address: "Derech Bar Yehuda 52, Nesher",
  //   email: "info@save.org.il",
  //   phone: "0723326584",
  //   owner: "Yron Katz",
  //   description: "We are here to provide comprehensive mortgage consulting services tailored to Daguma's needs. Our team of experts will accompany you through the entire mortgage process, and offer customized solutions and advice.",
  //   logo: '../src/assets/images/save_logo.png'
  // };
  data = {
    name: '',
    address: '',
    email: '',
    phone: '',
    owner: '',
    description:'',
    logo: '../src/assets/images/save_logo.png'
  };
  constructor() {
    makeObservable(this, {
      data: observable,
      changeBusinessDetails: action,
      initialBusinessDetails: action,
      initData:action,
    });
    
  }


  changeBusinessDetails = async (details) => {
    const response = await fetch("http://localhost:8787/businessData", {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      this.data = details;

    }
  };

  initData = async (details) => {
    const response = await fetch("http://localhost:8787/businessData", {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.statusText);
    if (response.status === 200) {
      this.data = details;
    }
  };
  initialBusinessDetails = async () => {
    const response = await fetch("http://localhost:8787/businessData");
    const data = await response.json();
    console.log(data);
    this.data = data;
    console.log("businessDetails", this.data);
  };


}

export default new BusinessStore();
