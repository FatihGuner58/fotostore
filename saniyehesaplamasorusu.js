function hesaplaYasSaniye() {
    var yas = parseInt(prompt("Lütfen yaşınızı girin:"));
    var yasamSaniyesi = yas * 365 * 24 * 60 * 60;
    var kalanSaniye = (100 - yas) * 365 * 24 * 60 * 60;
    
    console.log("Yaşam boyunca geçen saniye sayısı: " + yasamSaniyesi);
    console.log("Kalan saniye sayısı: " + kalanSaniye);
}

hesaplaYasSaniye();