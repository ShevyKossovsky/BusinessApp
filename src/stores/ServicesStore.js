import Swal from 'sweetalert2';
import { observable, action, computed, makeObservable, observe } from 'mobx';
import BusinessStore from './BusinessStore';
import GlobalStore from './GlobalStore';
const service = {
    name: '',//לדוג: משכנתא למסורבים
    description: '',//לדוג:קבלת הלוואת משכנתא עבור נכס שאנחנו רוצים לקנות הוא כבר חוויה לא פשוטה בפני עצמה, אבל מה קורה כשאנחנו מגיעים לבנק עם כל המסמכים שהפקנו, אחרי כל הבדיקות שעשינו ומגלים שהבנק פשוט מסרב לתת לנו משכנתא מבלי יכולת לערער על ההחלטה? דחייה של הבנק יכולה להיות חוויה לא נעימה בכלל
    price: '',//לדוג:400 שח
    imgService: '',
}

class ServicesStore {

    servicesList = [
        {
            id: '1',
            name: 'New mortgage',
            description: 'One of the biggest advantages of working with a mortgage consulting firm is that we have access to a wide variety of mortgage products and financial products in general, whether it is a bank or non-bank entities such as insurance companies. In other words it means we can help you find the lowest interest rates and the best terms for you.',
            price: '300',
            imgService: '../src/assets/images/123.webp'
        },
        {
            id: '2',
            name: 'Mortgage for the rejected',
            description: 'Getting a mortgage loan for a property we want to buy is already a difficult experience in itself, but what happens when we arrive at the bank with all the documents we have produced, after all the tests we have done and discover that the bank simply refuses to give us a mortgage without being able to appeal the decision? Rejection by the bank can be an unpleasant experience at all',
            price: '400',
            imgService: '../src/assets/images/house-bills-elements-arrangement.jpg'

        },
        {
            id: '3',
            name: 'Mortgage cycle',
            description: 'One of the biggest advantages of working with us is the large network we have created of banks and financial institutions. This means that we work with all banks and all other financing bodies in the country, without exception, and thus we can provide you with a variety of different solutions with different advantages.',
            imgService: '../src/assets/images/Mortgage_thumbnail.jpg'

        }
    ]
    constructor() {
        makeObservable(this, {
            servicesList: observable,
            addService: action,
            addDefaultServices: action,
            initialServicesList: action,

        })
        this.addDefaultServices(this.servicesList.at(0));
        this.addDefaultServices(this.servicesList.at(1));
        this.addDefaultServices(this.servicesList.at(2));

    }

    addDefaultServices = async (service) => {
        const response = await fetch("http://localhost:8787/service", {
            method: "POST",
            body: JSON.stringify(service),
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    addService = async (newService) => {
        const response = await fetch("http://localhost:8787/service", {
            method: "POST",
            body: JSON.stringify(newService),
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(response.statusText);
        if (response.ok) {
            this.servicesList = ([...this.servicesList, newService])

            Swal.fire({
                title: "The service was successfully added ",
                icon: "success",
            });

        }

    }
    initialServicesList = async () => {
        const response = await fetch("http://localhost:8787/services");
        const data = await response.json();
        this.servicesList = ([...data]);
    };


}

export default new ServicesStore();

