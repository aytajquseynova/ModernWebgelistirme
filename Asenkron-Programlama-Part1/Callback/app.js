// callback fonksiyonlar

// const langs = ["pyhton", "java", "c++"];

// langs.forEach(function(lang){
//     console.log(lang);
// })

// document.getElementById('btn').addEventListener("click", function(){
//     console.log("tikla")
// })

// asinxron islemleri callback ile idare mumkundur

// function process1(callback){
//     setTimeout(() => {
//         console.log('process 1');
//         callback();
//     }, 3000);
// }

// function process2(){
//     setTimeout(function(){
//         console.log("process 2");
//     }, 2000);
// }

// process1(process2)
// console.log("naber"); //asinxronda burda bunlar bir-birini gozlemir


// const langs = ["pyhton", "java", "c++"];

// function addLang(lang, callback){
//     setTimeout(function(){
//         langs.push(lang);
//         console.log('eklendi');
//         callback();
//     }, 2000);
// }

// function getAllLangs(){
//     setTimeout(function(){
//         langs.forEach(function(lang){
//             console.log(lang)
//         })
//     }, 1000)
// }

// addLang('js', getAllLangs);
 // asenkron

