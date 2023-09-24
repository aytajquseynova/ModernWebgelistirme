//Replace
//      <h1 class = "heading-title" id =" dinamikElement">Dinamik Element Silmek</h1>

const cardBody = document.querySelectorAll('.card-body')[0];
const newElement = document.createElement('h3');
newElement.className = 'heading-title';
newElement.id = 'dinamikElement';
newElement.textContent = 'Dinamik Elementi deyisdirmek';

// evvelce kohne element secilir

const oldElement = document.querySelector('h1');
cardBody.replaceChild(newElement, oldElement)
console.log(newElement);