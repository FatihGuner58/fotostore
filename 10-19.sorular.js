// Bir değişken oluşturmak ve başlangıç değeri atamak
let string = "Afyonkarahisarlılaştıramadıklarımızdanmısınız";

// Stringi tarayıcı konsolunda yazdırma
console.log(string);

// Stringin uzunluğunu tarayıcı konsolunda yazdırma
console.log("String uzunluğu:", string.length);

// Stringdeki tüm karakterleri büyük harfe çevirme
let buyukHarfString = string.toUpperCase();
console.log("Büyük harf stringi:", buyukHarfString);

// Stringdeki tüm karakterleri küçük harfe çevirme
let kucukHarfString = string.toLowerCase();
console.log("Küçük harf stringi:", kucukHarfString);

// Stringin ilk kelimesini kesme
let ilkKelime = string.split(" ")[0];
console.log("İlk kelime:", ilkKelime);

// “Afyonkarahisarlılaştıramadıklarımızdanmısınız” stringinden “hisarlılaştırama”'yı ekranda yazdırma
let kesilenKisim = string.substring(6, 25);
console.log("Kesilen kısım:", kesilenKisim);

// Stringin 'Script' kelimesini içerip içermediğini kontrol etme
let iceriyorMu = string.includes("Script");
console.log("String 'Script' kelimesini içeriyor mu?", iceriyorMu);

// Stringi bir diziye dönüştürme
let dizi = string.split("");
console.log("Dizi:", dizi);

// Stringi boşluktan bölme
let bolunmusString = string.split(" ");
console.log("Boşluktan bölünmüş string:", bolunmusString);