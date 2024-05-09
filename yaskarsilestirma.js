let benimYasim = prompt("Yaşınızı girin:");
let onunYasi = prompt("Karşılaştıracağınız kişinin yaşını girin:");

if (benimYasim > onunYasi) {
    console.log("Ben daha yaşlıyım.");
} else if (benimYasim < onunYasi) {
    console.log("O daha yaşlı.");
} else {
    console.log("Biz aynı yaştağız.");
}