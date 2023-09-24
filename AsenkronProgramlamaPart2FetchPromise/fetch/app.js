// function getTextFile(){
function getTextFile(){  // text dosyasi
    fetch("example.txt")
    .then(response => response.text())
    .then(data => console.log(data))
    .catch( err => console.error(err));
}
// getTextFile();
function getJsonFile(){ // local bir json dosyasindan veri alma
    fetch("example.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}
// getJsonFile();

function getExternalAPI(){
    fetch("https://api.exchangerate.host/latest")
    .then(response => response.json())
    .then(data => console.log(data.rates.TRY))
    .catch(err => console.log(err))
}
getExternalAPI();

// https://api.exchangerate.host/latest