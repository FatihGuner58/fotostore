function aydakiGunSayisi(ay, yil) {
    var tarih = new Date(yil, ay, 0);
    return tarih.getDate();
}

var ay = 2;
var yil = 2024;
var gunSayisi = aydakiGunSayisi(ay, yil);
console.log(yil + " yılının " + (ay+1) + ". ayında " + gunSayisi + " gün bulunmaktadır.");