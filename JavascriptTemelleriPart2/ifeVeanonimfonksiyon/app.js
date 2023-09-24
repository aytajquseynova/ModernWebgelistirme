//Fonksiyon tanimlama
function salam(){
    console.log("salam necesiz");
}
salam(); //function call adlanir
console.clear();
function person(name,age){
    if(typeof name === "undefined") name="bilgi yok";
    if(typeof age === "undefined") age="bilgi yok";
    console.log(`Isim: ${name} Yas: ${age}`);
}
person("Aytaj", 22);
person("Johnny",23);
person();
console.clear();
// 
function square(x){
    console.log(x*x);
}
let a = square(13);
console.clear();
// return ozelliyi
function square(y){
    return y*y;
}
function cube(y){
    return y*y*y;
}
let b = square(5);
b = cube(b);
console.log(b);

console.clear();

function salam(){
    return "necesiz";
}
console.log(salam());
console.clear();
//Function Expression
const hello =function(name){
    console.log("salam"+" "+name);
}
hello("aytaj");

console.clear();
//IIFE Immediately Invoked Function Expression
//tanimlandigi yerde calisan fonksiyon
(
    function(student){
        console.log("salam"+ student);
    }
)("aytaj");

console.clear();

