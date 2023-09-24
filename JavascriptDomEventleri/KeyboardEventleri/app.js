// Klavye eventleri
const header = document.querySelector('.header-card-body');
const toDoInput = document.querySelector(".form-control");
toDoInput.addEventListener('keyup', run);
function run(e){
    // console.log(e.key);
    // console.log(e.target.value);
    header.textContent = e.target.value;
}

//keypress -sadece herf ve reqem tuslarini destekleyir
// document.addEventListener('keypress', run);

// function run(e){
//     // console.log(e.which);
//     // console.log('naber');
//     console.log(e.key);
// }

// keydown 

// document.addEventListener('keydown', run); //keydown diger tuslari da destekleyir

// function run(e){
//     console.log(e.key);
// }

// Keyup

// document.addEventListener('keyup', run);

// function run(e) {
//     console.log(e.key);
// }


