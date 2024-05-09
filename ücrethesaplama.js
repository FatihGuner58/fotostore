var saatbaşıücret = parseFloat(
    prompt("Saat başı alacağınız ücreti giriniz")
  );
  var saatsayısı = parseFloat(prompt("Saat sayısını giriniz"));
  var Kazanç = saatbaşıücret * saatsayısı;
  document.write("Kazanç= " + Kazanç);