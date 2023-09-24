// const element = document.querySelector("#clear-todos");

//Element ozellikleri
// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[0]);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);

// Style ve Element ozelliklerini deyisdirmek

// element.className = "btn-danger";
// element.style.color = "black";
// element.style.padding = '5px';
// element.href = "https://www.udemy.com/course/komple-sifirdan-web-gelistirme-kursu/learn/lecture/12171670#notes";
// element.target ="_blank";
// element.textContent =' Silin';
// element.innerHTML = "<span style = 'color:green'>Silin</span>"

// const elements = document.querySelectorAll(".list-group-item");
// elements.forEach(function(el){
//     el.style.color = 'red';
//     el.style.background ='#eee';
// }) // eger butun li elementlerinin style`ini deyismek isteyirikse bele deyisirik

let element2 = document.querySelector('li:nth-child(2');
element2.style.color = 'green';
element2 =document.querySelectorAll("li:nth-child(odd)");
element2.forEach(function(el){
    el.style.color = 'seagreen';
    el.style.background = '#ccc';
})

// console.log(element2)
// console.log(element);
