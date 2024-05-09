function gunSayisi(ay, yil) {
    var sonGun = new Date(yil, ay, 0).getDate();
    return sonGun;
}

var ay = 3; 
var yil = 2024;
console.log(ay + ". ayında " + yil + " yılında " + gunSayisi(ay, yil) + " gün vardır.");