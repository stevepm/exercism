function words(text) {
  var textArray = text.split(/[\W ]+/g);
  var textObject = {};
  for (i = 0; i < textArray.length; i++) {
    var word = textArray[i].toLowerCase();
    if (word === '') {
      continue;
    }
    if (typeof textObject[word] === 'number') {
      textObject[word]++;
    } else {
      textObject[word] = 1;
    }
  }
  return textObject;
}

module.exports = words;