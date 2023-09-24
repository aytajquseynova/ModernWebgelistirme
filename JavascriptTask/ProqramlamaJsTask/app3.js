let mebleg = Number(prompt('emanetin meblegini daxil edin'));
let months = Number(prompt('aylarin sayini daxil edin'));
let faiz = Number(prompt('illik faiz '));

let one_month = mebleg/months;
let heray = one_month + faiz*one_month/100;
let umumi = heray * months;
let qazanc = umumi - mebleg;
console.log(`${months} aydan sonra qazancin ${qazanc} olacaq`);
// İstifadəçidən əmanətin məbləğini, müddətini və faiz dərəcəsini daxil etməsini istəyin.
// Brauzerdə bildiriş mesajı göstərin: «... aydan sonra əmanətdən qazancınız ... olacaq».
// Konsolda sintaktik səhvlərin və xəta mesajlarının varlığını yoxlayın.