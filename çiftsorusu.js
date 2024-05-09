function isEven(number) {
    if (typeof number !== 'number') {
        return "Geçersiz giriş"; // sayının bir sayı olup olmadığını kontrol edin
    }
    return number % 2 === 0 ? "Çift" : "Tek";
}


console.log(isEven(4)); // Çift
console.log(isEven(7)); // Tek
