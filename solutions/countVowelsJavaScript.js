// Problem 1 = Count Vowels

function countVowelReduce(text) {
  var vowels = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0
  };
  return text.split('').reduce(function(vowels, letter) {
    letter = letter.toLowerCase();
    if(letter in vowels) {
      vowels[letter]++;
    }
    return vowels;
  }, vowels);
}

console.log(countVowelReduce("WDI at GA rocks!"));