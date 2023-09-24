//While dongusu
let i = 0;
while(i<15){//sonsuz dongu
    console.log(i);
    i++ ;
}

console.clear();

let a = 15;
while (a > 0){//sonsuz dongu
    console.log(a);
    a -= 2;
}

console.clear();

//Break and Continiue

let b = 0;
while (b < 10 ){
    console.log(b);
    if(b === 5){
        break;
    }
    b++;
} //break

console.clear();

let c = 2;
while(c < 20){
    if(c == 4 || c ==6 || c==8){
        c +=2;
        continue;
    }
    console.log(c);
    c += 2;
} //continiue ozelliyi

console.clear();

//Do While
let d = 0;
do{
console.log(d);
d++;
}while(d < 5);
// do while dongusu ele de cox islenmir. bu dongude ilk once emr yerine yetirilir, sonra ise sert yoxlanilir

console.clear();

//While dongusu ile massiv
const frontend=['HTML','CSS','JAVASCRIPT','BOOTSTRAP','SCSS'];
//let index = 0;
//while(index<frontend.length){
//    console.log(frontend[index]);
//  index++;
//}

console.clear();
//For dongusu
// For dongusunde 1.deyisken teyin edilir
//2.ci sert yazilir
//3-cu artirma emeliyyati heyata kecirilir
for(index = 0; index<frontend.length; index++){
    console.log(frontend[index]);
};

console.clear();
//map ozelliyi 
const users=[
    {ad:'johnny', dogumIli:2000},
    {ad:'aytaj', dogumIli:2001},
    {ad:'nara',dogumIli:2001}
]
const years=users.map(function(year){
    return year.dogumIli;
 });
 const names=users.map(function(name){
    return name.ad;
 })
 console.log(years);
 console.log(names);
 console.clear();
// 
//for in dongusu
const istifadeci={
    ad:'aytac',
    yas:"21"
}
for(let key in istifadeci){
    console.log(key,istifadeci[key]);
}