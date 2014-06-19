// problem 15 async loops
// function loadUsers(userIds, load, done) {
//   var users = [];
//   // for (var i = 0; i < userIds.length; i++) {
//   //   users.push(load(userIds[i]));
//   // }
//   users = userIds.map(function(id){
//     return load(id);
//   });
//   return users;
// }

// module.exports = loadUsers;

// solution, didn't really understand we had to return through calling done()
// also didn't know we could use forEach()
function loadUsers(userIds, load, done) {
  var completed = 0;
  var users = [];
  userIds.forEach(function(id, index) {
    load(id, function(user) {
      users[index] = user;
      if (++completed == userIds.length) return done(users);
    });
  });
}

module.exports = loadUsers;
