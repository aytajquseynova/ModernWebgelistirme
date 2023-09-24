// set timeout

// setTimeout(function(){
//     console.log("naber")
// }, 2000); //2 saniye sonra baslayir

let i = 0;
let value = setInterval(function(){
    i++;
    console.log('sayi', i);
}, 1000) 

// clear interval - durdurur

document.getElementById('btn').addEventListener('click', function(){
    clearInterval(value);
})
