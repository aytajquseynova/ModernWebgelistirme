// ajax , callback, http requests

class Request{
    constructor(){
        this.xhr = new XMLHttpRequest();
    }
    // get request

    get(url, callback){
        this.xhr.open("GET", url); // baglanti actik
        // const temp = this; 

        this.xhr.onload = () => {
            // console.log(this);
            if(this.xhr.status === 200){
                callback(null, this.xhr.responseText); // istek bitdi
            }
            else{
                // hata durumuna
                callback('her hangi bir hata olustu', null);
            }
        } // .bind.this
        this.xhr.send();
    }
}

const request = new Request();

request.get("https://jsonplaceholder.typicode.com/albums", function(err, response){
    if (err === null){
        // basarili
        console.log(response);
    }
    else{
        // hata
        console.log(err); // linkde meselen xeta yarananda
    }
 });

// 1ci usul - const temp = this yazmaqla 
// temp.status, temp.responseText 

// 2ci usul this.status , this.responsetext

// 3cu usul  bind this

// 4cu usul arrow functiona cevir
