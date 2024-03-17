import { observable, action, computed, makeObservable } from 'mobx';

export class BusinessStore {
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
