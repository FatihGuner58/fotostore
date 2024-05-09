var kısakenar = parseFloat(prompt("Dikdörtgenin kısa kenarını giriniz"));
      var uzunkenar = parseFloat(prompt("Dikdörtgenin uzun kenarını giriniz"));

      var alan = kısakenar * uzunkenar;
      var çevre = 2 * (kısakenar + uzunkenar);

      document.write("Dikdörtgenin alanı:" + alan);
      document.write("Dikdörtgenin Çevresini giriniz" + çevre);