const filterInput = document.getElementById('filter');
const toDoForm = document.getElementById('todo-form');
toDoForm.addEventListener('submit', submitForm);

function submitForm(e){
    console.log('Submit Eventi');

    e.preventDefault(); //sehifenin yenilenmesini engelleyir
}
// filterInput.onfocus = function(){
//     console.log('naber')
// } // birinci usul
// console.log(filterInput);

//ve ya

// filterInput.addEventListener('focus', function(e){
//     console.log(e); 
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.placeholder);
//     console.log(e.target.className);
// }) // ikinci usul 