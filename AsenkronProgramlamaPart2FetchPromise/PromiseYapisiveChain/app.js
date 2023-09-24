// function getData(data){ // promise objesi donduren fonksiyon
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             // reject("olumsuz");

//             if(typeof data === "string"){
//                 //olumlu
//                 resolve(data);
//             }
//             else{
//                 // olumsuz
//                 reject(new Error("lutfen string bir deger girin"));
//             }
//         }, 5000)
//     });
// }

// // getData("merhaba").catch(function(err){
// //     console.log(err);
// // })
// getData("5")
// .then(response => 
//     console.log("gelen deger" +" "+ response)
// .catch(err => 
//     console.error(err)
// ))

function addTwo(number){
    return new Promise ((resolve, reject) => {
        setTimeout(function(){
            if(typeof number === "number"){
                resolve(number +2 );
            }
            else{
                reject (new Error("lutfen bir sayi girin"))
            }
        }, 3000)
    })
}

addTwo(10).
then(response => {
    console.log(response);
    return response + 2;
}).
then (response2 => {
    console.log(response2);
}).
catch(err =>{
    console.error(err);
}) 

// promiselerde birden cox then oldugu halda
// bir catch istifade ede bilerik
