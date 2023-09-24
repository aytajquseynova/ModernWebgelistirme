let number = Number(prompt("Daxil edin"));
let sum = 0;
for(let i = 100; i < 1000; i++){
        if(i % number == 0){
                sum = sum + i;              
        }
        
} console.log(sum);