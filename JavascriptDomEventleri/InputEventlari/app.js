const filter = document.getElementById('filter');

// console.log(filter);

// document.addEventListener('DOMContentLoaded', load);

// function load(e){
//     console.log('sayfa yuklendi')
// }

// FOCUS 
// filter.addEventListener('focus', run);
// // Blur
// filter.addEventListener('blur', run);

// PASTE 
// filter.addEventListener('paste', run);

// COPY
// filter.addEventListener('copy', run);

// CUT
// filter.addEventListener('cut', run);

// SELECT
filter.addEventListener('select', run);
function run(e){
    console.log(e.type);
}
