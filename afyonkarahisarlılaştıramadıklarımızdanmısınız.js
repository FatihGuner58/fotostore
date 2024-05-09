let str = "Afyonkarahisarlılaştıramadıklarımızdanmısınız";

// dönüşecek olan
let newStr = str.replace("Afyonkarahisarlı", "Sivaslı");

// 15. indexdeki karakteri ublma
let bul15 = newStr.charAt(15);

// Ş karakterinin ASCII kodunu bulma
let asciikodu = newStr.charCodeAt(newStr.indexOf("Ş"));

// a harfinin ilk ve son geçtiği konumları bul
let ailk = newStr.indexOf("a");
let ason = newStr.lastIndexOf("a");

// Sonuçları konsola yazdır
console.log("Yeni string: ", newStr);
console.log("15. indexdeki karakter: ", bul15);
console.log("Ş karakterinin ASCII kodu: ", asciikodu);
console.log("'a' harfinin ilk geçtiği konum: ", ailk);
console.log("'a' harfinin son geçtiği konum: ", ason);