class Request {
   async get(url) { 
            const response = await fetch(url); // response obje
            const data = await response.json() // json obje
            return data;
    }
    async post(url, data) {
        const response = await fetch(url, {
            method : 'POST',
            body: JSON.stringify(data),
            headers:{
                "Content-type": "application/json; charset-UTF-8"
            }
        }) ;// response object
        const responsedata = await response.json();
        return responsedata;
    }
   async  put(url, data) {
        const response = await fetch (url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset-UTF-8"
            }
        }) ;// response object
        const responsedata = await response.json();
        return responsedata;

    }

    async  deleteData(url) {
        const response = await fetch("https://jsonplaceholder.typicode.com/albums/1" ,{
            method :'DELETE',
        });
        // const data = await response.json();

        // return data;
        return "veri silme basarili";

}}
// https://jsonplaceholder.typicode.com/albums

const request = new Request();
request.deleteData("https://jsonplaceholder.typicode.com/albums/1", {userId:10, title :"Tarkan Karma"})
.then(message => console.log(message)
.catch(err => console.log(err)))
// request.delete("https://jsonplaceholder.typicode.com/albums/1")
//     .then(message => console.log(message))
//     .catch(err => console.log(err)