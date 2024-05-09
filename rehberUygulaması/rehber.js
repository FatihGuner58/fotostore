document.addEventListener("DOMContentLoaded", function() {
    var kaydedilenler = [];

    document.getElementById("kaydetButon").addEventListener("click", function() {
        var ad = document.getElementById("adInput").value.trim();
        var soyad = document.getElementById("soyadInput").value.trim();
        var telefon = document.getElementById("telefonInput").value.trim();
        var email = document.getElementById("emailInput").value.trim();

        if (ad !== "" && soyad !== "" && telefon !== "" && email !== "") {
            var yeniKayit = {
                ad: ad,
                soyad: soyad,
                telefon: telefon,
                email: email
            };

            kaydedilenler.push(yeniKayit);
            güncelleListe();
        }
    });

    document.getElementById("siralaButon").addEventListener("click", function() {
        kaydedilenler.sort(function(a, b) {
            var adA = a.ad.toLowerCase();
            var adB = b.ad.toLowerCase();
            if (adA < adB) return -1;
            if (adA > adB) return 1;
            return 0;
        });
        güncelleListe();
    });

    function güncelleListe() {
        var kayitlarDiv = document.getElementById("kayitlar");
        kayitlarDiv.innerHTML = "";

        kaydedilenler.forEach(function(kayit) {
            var div = document.createElement("div");
            div.classList.add("kayit");

            var adParagraf = document.createElement("p");
            adParagraf.textContent = "Ad: " + kayit.ad;

            var soyadParagraf = document.createElement("p");
            soyadParagraf.textContent = "Soyad: " + kayit.soyad;

            var telefonParagraf = document.createElement("p");
            telefonParagraf.textContent = "Telefon: " + kayit.telefon;

            var emailParagraf = document.createElement("p");
            emailParagraf.textContent = "Email: " + kayit.email;

            div.appendChild(adParagraf);
            div.appendChild(soyadParagraf);
            div.appendChild(telefonParagraf);
            div.appendChild(emailParagraf);

            kayitlarDiv.appendChild(div);
        });
    }
});