class Request{
    get(url){//get request
        return new Promise((resolve, reject) => {
               fetch(url)
                   .then(response => response.json())
                   .then(data => console.log(data))
                   .catch(err => reject(err))
               })
            }

}
// https://jsonplaceholder.typicode.com/albums

const request = new Request();
let albums;

request.get("https://jsonplaceholder.typicode.com/albums")
.then(albums => {
    console.log(albums);
})
.catch(err => console.log(err));
console.log("hello");
