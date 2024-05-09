var ifade = "Afyonkarahisarlılaştıramadıklarımısınız";
var ilkKonum = ifade.indexOf("a");
var sonKonum = ifade.lastIndexOf("a");

if (ilkKonum !== -1) {
    console.log("İlk 'a' harfinin geçtiği konum: " + ilkKonum);
} else {
    console.log("'a' harfi bulunamadı.");
}

if (sonKonum !== -1) {
    console.log("Son 'a' harfinin geçtiği konum: " + sonKonum);
}