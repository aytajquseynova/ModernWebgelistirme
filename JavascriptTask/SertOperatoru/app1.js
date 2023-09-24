let value = prompt();
let array =  value.split(' ');


for(i in array){
  array[i] = Number(array[i]);
  if((array[i] != Math.max(...array)) && (array[i] != Math.min(...array))){
      console.log(array[i]);

}
}
// if(array[0] === array[1] || array[1] === array[2] || array[0] === array[2]){
//     console.log('İki və ya üç daxil edilmiş ədəd eynidir');
// }


// İstifadəçidən üç ikirəqəmli ədəd daxil etməsini xahiş edin.
// Orta ədədi müəyyənləşdirin və konsola orta ədədi çıxarın, yəni nə ən böyüyü, nə də ən kiçiyi çıxarmayın.
// Daxil edilmiş dəyərlərin düzgünlüyünü yoxlayın.