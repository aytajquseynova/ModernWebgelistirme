//Dinamik Element silmek
const toDoList = document.querySelector('ul.list-group');
const toDos = document.querySelectorAll('li.list-group-item');
// toDos[1].remove(); birinci usul 
// console.log(toDoList);

//Remove Child
// toDoList.removeChild(toDoList.lastElementChild); ikinci usul

toDoList.removeChild(toDos[2]) // ucuncu usul
console.log(toDoList);

