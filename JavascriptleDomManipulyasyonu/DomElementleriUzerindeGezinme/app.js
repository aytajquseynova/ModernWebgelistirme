let value;

const toDoList = document.querySelector('.list-group');
const toDo = document.querySelector('.list-group-item:nth-child(2)');

value = toDoList;
value = toDo;
value = toDoList.childNodes;

value = toDoList.children[toDoList.children.length -1];
value = toDoList.firstElementChild;
value = toDoList.lastElementChild;
value = toDo.parentElement;

//element kardesleri 
value = toDo;
value = toDo.previousElementSibling;
value = toDo.nextElementSibling.nextElementSibling;
console.log(value);