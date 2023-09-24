let value;
value = document;


//Scripts
value = document.scripts; // butun script etiketlerini gosterir
value = document.scripts.length; // script etiketlerinin sayini gosterir


//Links
value = document.links; // linkleri gosterir
value = document.links[0]; // ilk link
value = document.links [document.links.length - 1]; // son link
value = document.links [document.links.length -1].getAttribute('href'); // href ozelliyine catacaqdir


//formlar
value = document.forms ;
value = document.forms.length ;
value = document.forms[0];
value = document.forms['form'] // forma ad vermek mumkundur
value = document.forms[0].id;
value = document.forms[0].method ; // get ve ya post metodu oldugunu aydinlasdirir

console.log(value)