// yeni element olusturma
const newLink = document.createElement('a');
const cardBody = document.getElementsByClassName('card-body')[1];
newLink.id = 'clear-todos';
newLink.className ='btn btn-primary';
newLink.href ="https://www.udemy.com/course/komple-sifirdan-web-gelistirme-kursu/learn/lecture/12171702#overview";
newLink.target ="_blank";
newLink.appendChild(document.createTextNode('Ferqli Sehifeye get'))
cardBody.appendChild(newLink)
console.log(newLink);