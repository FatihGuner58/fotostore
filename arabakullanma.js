var dogumYili = prompt("Doğum yılınızı girin:");

var simdikiYil = new Date().getFullYear();

var yas = simdikiYil - dogumYili;

if (yas >= 18) {
    console.log("Araba kullanma izniniz var!");
} else {
    var beklemeSuresi = 18 - yas;
    console.log("Araba kullanma izni için " + beklemeSuresi + " yıl beklemeniz gerekiyor.");
}