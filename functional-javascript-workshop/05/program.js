// problem 05 every some
function isInGoodUsers(users){
  return function(submittedUser){
    return users.some(function(user){
      return user.id === submittedUser.id;
    });
  };
}
function checkUsersValid(goodUsers){
  return function(submittedUsers){
    return submittedUsers.every(isInGoodUsers(goodUsers));
  };
}

module.exports = checkUsersValid;

//solution closures are a bitch
// module.exports = function checkUsersValid(users) {
//   return function(submittedUsers) {
//     return submittedUsers.every(function(submittedUser) {
//       return user.some(function(user) {
//         return user.id === submittedUser.id;
//       });
//     });
//   };
// };
