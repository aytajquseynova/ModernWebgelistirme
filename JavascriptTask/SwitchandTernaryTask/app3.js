let date = prompt('tarixi «YYYY.MM.DD» formatında daxil et');

let il = Number(date.split(".")[0]);
let ay = Number(date.split(".")[1]);
let gun = Number(date.split(".")[2]);
switch(ay){
    case 1:
        console.log(`${gun} yanvar ${il}-cu il`);
        break;
    case 2:
        console.log(`${gun} fevral ${il}-cu il`);
        break;
    case 3:
        console.log(`${gun} mart ${il}-cu il`);
        break;
    case 4:
        console.log(`${gun} aprel ${il}-cu il`);
        break; 
    case 5:
        console.log(`${gun} may${il}-cu il`);
        break;
    case 6:
        console.log(`${gun} iyun ${il}-cu il`);
        break;
    case 7:
        console.log(`${gun} iyulr${il}-cu il`);
        break;
    case 8:
        console.log(`${gun} avqust ${il}-cu il`);
        break; 
     case 9:
        console.log(`${gun} sentyabr ${il}-cu il`);
        break;
    case 10:
        console.log(`${gun} oktyabr ${il}-cu il`);
        break;
    case 11:
        console.log(`${gun} noyabr ${il}-cu il`);
        break;
    case 12:
        console.log(`${gun} dekabr ${il}-cu il`);
        break; 
    default:
        console.log('yanlis reqem daxil edilib') ;
}
// İstifadəçidən tarixi «YYYY.MM.DD» formatında daxil etməyi xahiş edin.
// Tarixin təsvirini «12 may 2019-cu il» formatında çıxarın.
// Daxil edilmiş dəyərə validator əlavə edin.