// '10' tipinin tam olarak 10'a eşit olup olmadığını kontrol et
if ('10' === 10) {
    // Eğer eşit değilse, '10' tipini tam olarak 10'a eşitle
    var ten = parseInt('10');
    console.log("'10' tipi tam olarak 10'a eşit değildi. Eşit hale getirildi.");
} else {
    console.log("'10' tipi zaten tam olarak 10'a eşit.");
}

// parseFloat('9.8')'in 10'a eşit olup olmadığını kontrol etme
let floatNumber = parseFloat('9.8');
if (floatNumber === 10) {
    console.log("parseFloat('9.8') 10'a eşittir.");
} else {
    console.log("parseFloat('9.8') 10'a eşit değil, 10'a eşitleyin.");
    floatNumber = 10;
}

// 'on' kelimesinin hem 'python' hem de 'jargon' kelimesinde geçip geçmediğini kontrol etme
let pythonWord = 'python';
let jargonWord = 'jargon';
let searchString = 'on';

if (pythonWord.includes(searchString) && jargonWord.includes(searchString)) {
    console.log("'on' kelimesi hem 'python' hem de 'jargon' kelimelerinde geçiyor.");
} else {
    console.log("'on' kelimesi hem 'python' hem de 'jargon' kelimelerinde geçmiyor.");
}

// "I hope this course is not full of jargon." cümlesinde 'jargon' kelimesinin geçip geçmediğini kontrol etme
let sentence = "I hope this course is not full of jargon.";
if (sentence.includes('jargon')) {
    console.log("'jargon' kelimesi cümlede geçiyor.");
} else {
    console.log("'jargon' kelimesi cümlede geçmiyor.");
}
 
// 0 ile 100 arasında rastgele bir sayı oluşturma
let randomNumBetween0And100 = Math.floor(Math.random() * 101);
console.log("0 ile 100 arasında rastgele bir sayı: ", randomNumBetween0And100);

// 50 ile 100 arasında rastgele bir sayı oluşturma
let randomNumBetween50And100 = Math.floor(Math.random() * 51) + 50;
console.log("50 ile 100 arasında rastgele bir sayı: ", randomNumBetween50And100);

// 0 ile 255 arasında rastgele bir sayı oluşturma
let randomNumBetween0And255 = Math.floor(Math.random() * 256);
console.log("0 ile 255 arasında rastgele bir sayı: ", randomNumBetween0And255);

// 'JavaScript' stringindeki karakterlere rastgele bir sayı kullanarak erişme
let jsString = 'JavaScript';
let randomIndex = Math.floor(Math.random() * jsString.length);
let randomChar = jsString[randomIndex];
console.log("Rastgele erişilen karakter: ", randomChar);