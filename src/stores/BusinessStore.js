import { observable, action, computed, makeObservable } from 'mobx';

export class BusinessStore {
  businessDetails = {
    name: "save-mortgage and finance consulting",
    address: "Derech Bar Yehuda 52, Nesher",
    email: "info@save.org.il",
    phone: "0723326584",
    owner: "Yron Katz",
    description: "We offer a wide variety of mortgage options designed to meet the needs of home buyers and property investors alike. Our team of experts works in cooperation with all banks without exception and ensures you the best interest rates and terms you can ask for.",
    logo: '../src/assets/images/save_logo.png'
  };

  constructor() {
    makeObservable(this, {
      businessDetails: observable,
      saveChanges: action,
      getBusinessDetails: computed,
    });
  }

  saveChanges(data) {
    console.log("try to save");
    this.businessDetails.name = data.name;
    this.businessDetails.address = data.address;
    this.businessDetails.email = data.email;
    this.businessDetails.phone = data.phone;
    this.businessDetails.owner = data.owner;
    this.businessDetails.description = data.description;
  }

  get getBusinessDetails() {
    return this.businessDetails;
  }
}

export default new BusinessStore();
