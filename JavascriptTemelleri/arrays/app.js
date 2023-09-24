let value;
const numbers=[22,56,2,6,8,90,24];
const langs=['pyhton','java','css'];
value=numbers.length;
value=numbers[4];
value=numbers[numbers.length-1];
value=langs[langs.length-1];
numbers[4]=10;
value=numbers;
numbers.push(250); // arrayin sonuna deyer elave etme
numbers.unshift(33); //arrayin evveline deyer elave etme
langs.pop(); //axirinci deyeri silmek
value=langs;
numbers.shift();
value=numbers;
numbers.splice(0,5);// mueyyen bir qismi kesib atir
value=numbers;
console.log(value);