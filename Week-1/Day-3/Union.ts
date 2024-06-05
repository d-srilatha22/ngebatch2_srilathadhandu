/* type Day = 'MON' | 'TUE' | 'WEDS' | 'THUR' | 'FRI'
const chooseDeliveryDay = (day: Day) => {
    console.log(day);
}
chooseDeliveryDay('MON') // OK
chooseDeliveryDay('FRI') // Not OK */

type Address={
    houseNum:number,
    Street:string,
    city:string,
    postcode:number
}

let add:Address ={
    houseNum:101,
    Street:'kphb',
    city:'Hyd',
    postcode:500085

}

let Address1:string = '101 kphb hyd 500085';

let printDetails = (aam:string | Address)  => {
    console.log(aam);
    console.log(add);
}

printDetails(Address1);