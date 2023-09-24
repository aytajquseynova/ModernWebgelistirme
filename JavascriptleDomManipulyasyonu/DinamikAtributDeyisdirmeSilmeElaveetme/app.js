const todoInput = document.getElementById('todo');
let element ;
element = todoInput;
element = todoInput.classList;
// todoInput.classList.add('newClass'); //yeni bir class adi elave edir
// todoInput.classList.add('newClass2');
// todoInput.classList.remove('form-control');
element = todoInput;
element = todoInput.placeholder;
element = todoInput.getAttribute('placeholder') //atributa baxir 
todoInput.setAttribute('placeholder', 'Add to do');

// element= todoInput.hasAttribute('name'); // atribut olanda true deyeri
// element = todoInput.hasAttribute('reject')
 todoInput.removeAttribute('type');
 element= todoInput;
console.log(element);