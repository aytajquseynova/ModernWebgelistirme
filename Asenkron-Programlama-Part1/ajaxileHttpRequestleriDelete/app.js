class Request {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    get(url, callback) {
        this.xhr.open("GET", url);

        this.xhr.onload = () => {
            if (this.xhr.status == 200) {
                callback(null, this.xhr.responseText);
            } else {
                callback('xeta', null);
            }
        }

        this.xhr.send();
    }

    post(url, data, callback) {
        this.xhr.open("POST", url);
        this.xhr.setRequestHeader("Content-type", "application/json")
        this.xhr.onload = () => {
            if (this.xhr.status === 201) {
                callback(null, this.xhr.responseText);
            } else {
                callback('xeta', 'null');
            }
        }

        this.xhr.send(JSON.stringify(data));
    }

    put(url, data, callback) {
        this.xhr.open("PUT", url);
        this.xhr.setRequestHeader("Content-type", "application/json")
        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                callback(null, this.xhr.responseText);
            } else {
                callback('put request: xeta', 'null');
            }
        }

        this.xhr.send(JSON.stringify(data));
    }

    delete(url, callback) {
            this.xhr.open("DELETE", url);

            this.xhr.onload = () => {
                if (this.xhr.status == 200) {
                    callback(null, "veri silme islemi basarili");
                } else {
                    callback('DELETE xeta', null);
                }
            }

            this.xhr.send();
    }

}

const request = new Request();

request.delete("https://jsonplaceholder.typicode.com/albums/10", function (err, response) {
    if (err === null) {
        // basarili
        console.log(response);
    } else {
        // hata
        console.log(err); // linkde meselen xeta yarananda
    }
});