let number = Number(prompt('4reqemli eded daxil et'));
let sum = 0;
while(number>0){
 sum += number % 10;
 number = parseInt(number / 10);
}

 console.log(sum);
//  İstifadəçidən dörd rəqəmli ədəd daxil etməsini xahiş edən və sonra daxil edilmiş ədədlərin rəqəmlərinin cəmini konsola çıxaran proqram yazın.