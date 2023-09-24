document.getElementById('btn').addEventListener('click', function(){

    
    const xhr = new XMLHttpRequest();

    // xhr.onreadystatechange= function(){

    //     if(this.status == 200 && this.readyState == 4){
    //         // response hazir
    //         console.log(this.responseText);
    //     }
    // }

    // xhr.onprogress = function(){
    //     console.log('process isleniyor...', this.readyState);
    // }

    xhr.onload = function(){
        if(this.status === 200){
            document.getElementById('ajax').textContent = this.responseText;
        };
    }
    xhr.open('GET', 'example.txt', true);
    
    xhr.send();
})

