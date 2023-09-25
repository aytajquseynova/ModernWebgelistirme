// async function test(data){
//     // promise return new Promise 
//     // return new Promise((resolve, reject) =>{
//     //     resolve(data)
//     // });

//     let promise = new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             resolve("bu bir degerdir")
//         }, 5000);
//     })
//     let response = await promise; // 5 saniye gozleyecek

//     // console.log("naber");

//     return response;

// }
// // test('salam').then(response => console.log(response));

// test("salam").then(response => console.log(response));

// async function testData(data){
//     let promise = new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             if(typeof data === "string"){
//                 resolve(data);
//             }
//             else{
//                 reject (new Error("Lutfen string bir deger girin"))
//             }
//         }, 5000);
//     });

//     const response = await promise;
//     return response;
// }
// testData("thriller").then(data => console.log(data))
// .catch( err => console.log(err));

async function getCurrency(url){
    const response = await fetch(url); // response object
    // console.log(response);

    const data = await response.json(); // json obje

    return data;

}
getCurrency("https://api.exchangerate.host/latest")
.then(ahmet => console.log(ahmet));
