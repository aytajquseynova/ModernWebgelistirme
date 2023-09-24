// Elementi id`e gore secmek
let element;

element = document.getElementById("birinci-abzas"); 
element = document.getElementById('ikinci-abzas');


//Elementi class`a gore secmek
element= document.getElementsByClassName('navbar-items')[0];


// element tag`e gore secmek
element= document.getElementsByTagName('p');

// query selector - css selector  - tek bir element
element = document.querySelector('#birinci-abzas');
element = document.querySelector('.navbar-items');
element = document.querySelector('li'); 

//query selector all - butun elementleri sec
element = document.querySelectorAll('li');
console.log(element);