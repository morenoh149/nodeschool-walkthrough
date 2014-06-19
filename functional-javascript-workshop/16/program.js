// problem 16 recursion
// var root = true;
// function getDependencies(tree) {
//   if(root) {
//     root = false;
//     return Array.prototype.map.call(Object.keys(tree.dependencies), function(ele,i){
//       return getDependencies(tree.dependencies[ele]);
//     });
//   }
//   if(tree.dependencies === undefined) {
//     return tree.name + "@" + tree.version;
//   }
//   return [tree.version].concat.apply([],
//     Array.prototype.map.call(Object.keys(tree.dependencies), function(ele,i){
//       return getDependencies(tree.dependencies[ele]);
//     })
//   );
// }

// module.exports = getDependencies;

// solution, no clue - getting lost with prototypes and recursively
// iterating through a json object

function getDependencies(mod, result) {
  result = result || [];
  var dependencies = mod.dependencies || [];
  Object.keys(dependencies).forEach(function(dep) {
    var key = dep + '@' + mod.dependencies[dep].version;
    if (result.indexOf(key) === -1) result.push(key);
    getDependencies(mod.dependencies[dep], result);
  });
  return result.sort();
}
module.exports = getDependencies;
