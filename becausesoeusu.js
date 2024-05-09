// Sentence 1
let sentence1 = "You cannot end a sentence with because because because is a conjunction";
let modifiedSentence1 = sentence1.replace(/because because because/, "because");
console.log(modifiedSentence1);

// Sentence 2
let sentence2 = "Love is the best thing in this world. Some found their love and some are still looking";
let loveCount = (sentence2.match(/love/gi) || []).length;
console.log(loveCount);

// Sentence 3
let sentence3 = "You cannot end a sentence with because because because is a conjunction";
let becauseCount = sentence3.split("because").length - 1;
console.log(becauseCount);