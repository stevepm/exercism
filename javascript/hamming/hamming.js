function compute(strand1, strand2){
  strand1 = strand1.split('');
  strand2 = strand2.split('');
  var len = strand1.length > strand2.length ? strand2.length : strand1.length;
  var counter = 0;
  for (var i=0; i<len; i++){
    if (strand1[i] !== strand2[i]){
      counter++;
    }
  }
  return counter;
}

module.exports = {compute: compute};