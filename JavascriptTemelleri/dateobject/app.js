let value;
const indi=new Date(); // indiki zaman
const adgunu=new Date("8-22-2001 11:30:00");
value=adgunu;
value=adgunu.getMonth();
value=adgunu.getDate();
value=adgunu.getDay();
value=adgunu.getHours();
value=adgunu.getMinutes();
value=adgunu.getSeconds();
adgunu.setDate(9);
adgunu.setMonth(11);
adgunu.setFullYear(2000);
value=adgunu;
console.log(value);