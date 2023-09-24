console.log("java" == "java");
console.log("js" == "javascript");
console.log("2" == 2);
console.log(2 === "2");
console.log(5 > 3);
console.log(9 < 2);
console.log(2 !=5 );
console.log(2 >= 2);
//mantiksal baglaclar
//not operator
console.log(!(97 > 5));
//and operator
console.log((2 !=2 ) && (7 < 3));
console.log((2==2) && ("aytaj"=="aytaj") );
//or operator
console.log((2 !=2 ) || (27 < 3));
//if 
if(5>3){
    console.log("5 3-den boyukdur")
}
console.clear();
const error = false;
if(error==true){
    console.log("xeta bas verdi");
}
else {
    console.log("xeta yoxdur");
}
console.clear();
// else if 
const number = 5;
if(number == 1){
    console.log("1-ci eded");
}
else if(number == 2){
    console.log("2-ci eded");
}
else if(number == 3){
    console.log("3-cu eded");
}
else if(number == 4){
    console.log("4-cu eded");
}
else {
    console.log("ayri bir eded");
}
console.clear();
//Ternary operator
const num =5;
console.log(num===5 ? "eded 5-e beraberdir" : "eded 5 deyil");
