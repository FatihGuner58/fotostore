const apiKey = 'AIzaSyDH0alEwzR8WbjQEHVJONvAziQyOG7yk0c';
const apiUrl = 'https://translation.googleapis.com/language/translate/v2';
const cevirButonu = document.getElementById('çevirButonu');

// Çeviri butonuna tıklanınca çeviri işlemini başlatma
cevirButonu.addEventListener('click', function() {
    const girilenMetin = document.getElementById('girilenBölüm').value;
    const hedefDil = document.querySelector('#language-selection2 input').value;

    // API'ye istek gönderme
    fetch(`${apiUrl}?key=${apiKey}&q=${girilenMetin}&target=${hedefDil}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => {
        // Çevrilen metni sonuca yazdır
        document.getElementById('sonuc').value = data.data.translations[0].translatedText;
    })
    // Eğer çevirme sırasında bir hata olursa consola ve alertten uyarı mesajı gelsin
    .catch(error => {
        console.error('Çeviri hatası:', error);
        alert('Çeviri sırasında bir hata oluştu.');
    });
});