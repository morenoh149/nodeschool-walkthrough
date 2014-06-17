// problem 06 reduce
function countWords(inputWords) {
  return inputWords.reduce(function(previousValue, currentValue, index, array){
    if(previousValue[currentValue])
      previousValue[currentValue] += 1;
    else
      previousValue[currentValue] = 1;
    return previousValue;
  }, {});
}

module.exports = countWords;

//solution was easy
// function countWords(arr){
//   return arr.reduce(function(countMap, word) {
//     countMap[word] = ++countMap[word] || 1 //increment or initialize to 1
//     return countMap
//   }, {})
// }
