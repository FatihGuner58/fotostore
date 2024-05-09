function mevsimKontrolu(ay) {
    if (ay === "Eylül" || ay === "Ekim" || ay === "Kasım") {
        return "Sonbahar";
    } else if (ay === "Aralık" || ay === "Ocak" || ay === "Şubat") {
        return "Kış";
    } else if (ay === "Mart" || ay === "Nisan" || ay === "Mayıs") {
        return "İlkbahar";
    } else if (ay === "Haziran" || ay === "Temmuz" || ay === "Ağustos") {
        return "Yaz";
    } else {
        return "Geçersiz ay!";
    }
}

var girisAy = "Ekim";
var mevsim = mevsimKontrolu(girisAy);
console.log(girisAy + " ayı " + mevsim + " mevsimine aittir.");