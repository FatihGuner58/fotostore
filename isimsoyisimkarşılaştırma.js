// İsim ve soyisimi tanımlayın
const isim = "Fatih";
const soyisim = "Güner";

// İsim ve soyisim uzunluklarını karşılaştırın
if (isim.length > soyisim.length) {
    console.log("İsim daha uzun.");
} else if (soyisim.length > isim.length) {
    console.log("Soyisim daha uzun.");
} else {
    console.log("İsim ve soyisim aynı uzunlukta.");
}