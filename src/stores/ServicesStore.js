export const servicesList = [
    {
        name: 'New mortgage', 
        description:'One of the biggest advantages of working with a mortgage consulting firm is that we have access to a wide variety of mortgage products and financial products in general, whether it is a bank or non-bank entities such as insurance companies. In other words it means we can help you find the lowest interest rates and the best terms for you.',
        price: '300',
        imgService:'../src/assets/images/123.webp'
    },
    {
        name: 'Mortgage for the rejected', 
        description: 'Getting a mortgage loan for a property we want to buy is already a difficult experience in itself, but what happens when we arrive at the bank with all the documents we have produced, after all the tests we have done and discover that the bank simply refuses to give us a mortgage without being able to appeal the decision? Rejection by the bank can be an unpleasant experience at all',
        price: '400',
        imgService:'../src/assets/images/house-bills-elements-arrangement.jpg'

    },
    {
        name:'Mortgage cycle',
        description:'One of the biggest advantages of working with us is the large network we have created of banks and financial institutions. This means that we work with all banks and all other financing bodies in the country, without exception, and thus we can provide you with a variety of different solutions with different advantages.',
        imgService:'../src/assets/images/Mortgage_thumbnail.jpg'

    }

];

export class service {

    name;//לדוג: משכנתא למסורבים
    description;//לדוג:קבלת הלוואת משכנתא עבור נכס שאנחנו רוצים לקנות הוא כבר חוויה לא פשוטה בפני עצמה, אבל מה קורה כשאנחנו מגיעים לבנק עם כל המסמכים שהפקנו, אחרי כל הבדיקות שעשינו ומגלים שהבנק פשוט מסרב לתת לנו משכנתא מבלי יכולת לערער על ההחלטה? דחייה של הבנק יכולה להיות חוויה לא נעימה בכלל
    price;//לדוג:400 שח
    imgService;
}

// const addService = (service) => {
//     servicesList = [...servicesList, service];
// }