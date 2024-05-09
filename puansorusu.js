function notVer(puan) {
    if (puan >= 80 && puan <= 100) {
        return "A";
    } else if (puan >= 70 && puan < 80) {
        return "B";
    } else if (puan >= 60 && puan < 70) {
        return "C";
    } else if (puan >= 50 && puan < 60) {
        return "D";
    } else if (puan >= 0 && puan < 50) {
        return "F";
    } else {
        return "Geçersiz puan!";
    }
}

var puan = 75;
var not = notVer(puan);
console.log("Puan: " + puan + ", Not: " + not);