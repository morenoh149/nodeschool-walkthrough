// problem 04 filter
// function getShortMessages(message){
//   message = message.map(function(ele){
//     return ele.message;
//   });
//   return message.filter(function(element, i, array){
//     return element.length < 50 ? true : false;
//   });
// }
// module.exports = getShortMessages;

//solution
// function getShortMessages(messages) {
//   return messages.filter(function(item) {
//     return item.message.length < 50
//   }).map(function(item) {
//     return item.message;
//   });
// }
function getShortMessages(messages){
  return messages.filter(function(element, i, array){
    return element.message.length < 50;
  }).map(function(element){
    return element.message;
  });
}
module.exports = getShortMessages;
