const deleteElement = document.querySelector('h1');

deleteElement.remove();
const ul = document.querySelector('ul');
const list = document.createElement("li");
list.innerText = "Titan RTX";
// Append to ul:
console.log(ul.appendChild(list));

