class Request{
    constructor(){
        this.xhr = new XMLHttpRequest();

    }

    get (url, callback){
        this.xhr.open("GET", url);

        this.xhr.onload = () =>{
            if(this.xhr.status == 200){
                callback(null, this.xhr.responseText);
            }else{
                callback('her hansi bir xeta yarandi', null)
            }
        }
        this.xhr.send();
    }
    post(url, data, callback){
        this.xhr.open("POST", url);
        this.xhr.setRequestHeader("Content-type", "application/json")

        this.xhr.onload = () =>{
            if(this.xhr.status === 201){
                // basarili
                callback(null, this.xhr.responseText);
            }else{
                callback('her hansi xeta yarandi', null);
            }
        }

        this.xhr.send(JSON.stringify(data));
    }
}

const request = new Request();

request.post("https://jsonplaceholder.typicode.com/albums", {userId:2, title:"Thriller"}, function(err, data){
    if(err === null){
        console.log(data);
    }
    else{
        console.log(err)
    }
} )