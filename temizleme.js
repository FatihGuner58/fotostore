let messySentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@#weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

// Metni temizleme ve kelimeleri ayırma
let temizleveayir = messySentence.replace(/[^\w\s]/g, '').toLowerCase().split(/\s+/);

// Kelimelerin sıklığını sayma
let wordFreq = {};
temizleveayir.forEach(word => wordFreq[word] = (wordFreq[word] || 0) + 1);

// En sık kullanılan kelimenin bulunması
let mostFreqWord = Object.keys(wordFreq).reduce((a, b) => wordFreq[a] > wordFreq[b] ? a : b);

console.log( mostFreqWord, wordFreq[mostFreqWord]);