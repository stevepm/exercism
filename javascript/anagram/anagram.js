function anagram(word) {
  this.word = word;
  this.originalWord = wordObject(word);
  this.matches = function (wordArray) {
    if (typeof wordArray === 'string'){
      wordArray = Array.prototype.slice.call(arguments);
    }
    var wordMatches = [];
    for (var i = 0; i < wordArray.length; i++) {
      var wordMatcher = wordArray[i];
      if (this.word.length !== wordMatcher.length || this.word.toLowerCase() === wordMatcher.toLowerCase()) {
        continue;
      }
      var wordToCheck = wordObject(wordMatcher);
      if (checkWords(this.originalWord, wordToCheck)) {
        wordMatches.push(wordMatcher)
      }
    }
    return wordMatches;
  };
}

function checkWords(word1, word2) {
  if (Object.keys(word1).length != Object.keys(word2).length) {
    return false;
  }
  for (len in word1) {
    if (!word1.hasOwnProperty(len)) {
      continue;
    }
    if (word1[len] !== word2[len]) {
      return false;
    }
  }
  return true;
}

function wordObject(word) {
  var charArray = word.split('');
  var charCount = {};
  for (i = 0; i < charArray.length; i++) {
    var char = charArray[i].toLowerCase();
    if (typeof charCount[char] === "number") {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  return charCount;
}

module.exports = anagram;