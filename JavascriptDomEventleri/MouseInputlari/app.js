const cardBody = document.querySelector('.card-body');
const title = document.querySelector('.card-title');

// console.log(title);

//CLICK  - 1 defe tikla
// title.addEventListener('click', run);

// function run(e){
//     console.log(e.type);
// }

// DOUBLE CLICK - 2 defe tikla

// title.addEventListener('dblclick', run);

// function run (e){
//     console.log(e.type);
// }

// MOUSE DOWN demek olar click eventi ile eynidir

// title.addEventListener('mousedown', run);

// function run (e){
//     console.log(e.type);
// }

//MoUSE UP click basib elini cekdikde isleyir
// title.addEventListener('mouseup', run);

// function run (e){
//     console.log(e.type);
// }

// MOUSE OVER - elementin uzerine geldiyimiz an isleyir, hemin elementin icerisinde ayri element varsa onlara da girende yaranir

// title.addEventListener('mouseover', run);

// function run (e){
//     console.log(e.type);
// }

// MOUSE OUT - elemente girib elementden cixdigimiz an yaranir

// title.addEventListener('mouseout', run);

// function run (e){
//     console.log(e.type);
// }

// MOUSE ENTER ve MOUSE LEAVE 

cardBody.addEventListener('mouseenter', run); // sadece bodye girende calisir, aryi elemente girende calismir
cardBody.addEventListener('mouseleave', run);

function run(e){
    console.log(e.type);
}