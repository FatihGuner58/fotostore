var simdikiZaman = new Date();

var gecenZamanMilisaniye = simdikiZaman.getTime();

var gecenZamanSaniye = Math.floor(gecenZamanMilisaniye / 1000)
;
console.log("1 Ocak 1970'ten şu ana kadar geçen saniye sayısı: " + gecenZamanSaniye);



