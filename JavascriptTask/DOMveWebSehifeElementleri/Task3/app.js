let heading = document.querySelector('h1');
heading.textContent = 'GeForce 20 Series';

console.log(heading);

let listItems = document.querySelectorAll('.primary');
listItems.forEach(function(element){
    element.style.color ='#ebebeb'
})

console.log(listItems);

// HTML-kod verilmişdir. Yalnız JS-kodundan istifadə edərək dəyişklik edin: 
// «GeForce 20 Series» üzrə başlıq mətni; 
// fon rəngi stili primary klası olan elementləri #ebebeb rənginə dəyişdirin.