let value;
const ad='Aytaj';
const firstname='Huseynova';
const langs="pyhton, js, css";
value=ad+" "+firstname;
//value=value+" "+'Axiyeva'; ve ya
value+=" "+"Axiyeva";
value=ad.length;
value=firstname.toLowerCase();
value=ad.toUpperCase();
value=ad[0];
value=firstname.indexOf('y');
value=langs.split(",");
value=langs.replace("css","react");
value=langs.includes("pyhton");
value=langs.includes('css');
console.log(value);